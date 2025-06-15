import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';
import { useContractWrite, useContractRead } from 'wagmi';
import { useWatchContractEvent } from 'wagmi';
import { parseEther } from 'viem';

// DeBridge contract addresses (example - replace with actual addresses)
const DEBRIDGE_GATE_ADDRESS = '0x43de2d77bf8027e25dbd179b491e8d64f38398aa';
const DEBRIDGE_HANDLER_ADDRESS = '0x...'; // Your deployed DeBridgeHandler contract address

// Chain IDs
const CHAIN_IDS = {
  ETHEREUM: 1,
  POLYGON: 137,
  BSC: 56,
  TOMO: 88 // TomoChain
};

export function DeBridgeProvider({ children }: { children: React.ReactNode }) {
  const { address } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  // Contract write for sending tokens cross-chain
  const { data: sendData, write: sendCrossChain, isPending } = useContractWrite({
    address: DEBRIDGE_HANDLER_ADDRESS,
    abi: [
      {
        name: 'sendCrossChain',
        type: 'function',
        stateMutability: 'payable',
        inputs: [
          { name: '_receiver', type: 'address' },
          { name: '_amount', type: 'uint256' },
          { name: '_targetChainId', type: 'uint256' }
        ],
        outputs: []
      }
    ],
    functionName: 'sendCrossChain',
    onSuccess: (data) => {
      setTransactionHash(data.hash);
    }
  });

  // Watch for transaction completion
  useWatchContractEvent({
    address: DEBRIDGE_HANDLER_ADDRESS,
    abi: [
      {
        name: 'CrossChainTransfer',
        type: 'event',
        inputs: [
          { name: 'sender', type: 'address', indexed: true },
          { name: 'receiver', type: 'address', indexed: true },
          { name: 'amount', type: 'uint256' },
          { name: 'targetChainId', type: 'uint256' }
        ]
      }
    ],
    eventName: 'CrossChainTransfer',
    onLogs: () => {
      setTransactionHash(null);
    }
  });

  const sendTokens = async (
    receiver: string,
    amount: string,
    targetChainId: number
  ) => {
    if (!address) {
      setError('Wallet not connected');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Convert amount to wei
      const amountInWei = parseEther(amount);

      // Send tokens cross-chain
      await sendCrossChain({
        args: [receiver, amountInWei, targetChainId],
        value: parseEther('0.01') // Bridge fee in native token
      });

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send tokens';
      setError(errorMessage);
      console.error('Error sending tokens:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    loading: loading || isPending || !!transactionHash,
    error,
    sendTokens,
    CHAIN_IDS
  };

  return (
    <DeBridgeContext.Provider value={value}>
      {children}
    </DeBridgeContext.Provider>
  );
}

const DeBridgeContext = createContext<{
  loading: boolean;
  error: string | null;
  sendTokens: (receiver: string, amount: string, targetChainId: number) => Promise<void>;
  CHAIN_IDS: typeof CHAIN_IDS;
}>({
  loading: false,
  error: null,
  sendTokens: async () => {},
  CHAIN_IDS
});

export const useDeBridge = () => useContext(DeBridgeContext); 