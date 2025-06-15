import React, { useState } from 'react';
import { useDeBridge } from '../contexts/DeBridgeContext';
import { useAuth } from '../contexts/AuthContext';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Text,
  useToast,
  Heading,
} from '@chakra-ui/react';

export function DeBridgeTest() {
  const { sendTokens, loading, error, CHAIN_IDS } = useDeBridge();
  const { address } = useAuth();
  const [amount, setAmount] = useState('');
  const [targetChain, setTargetChain] = useState('');
  const toast = useToast();

  const handleTransfer = async () => {
    if (!address) {
      toast({
        title: 'Error',
        description: 'Please connect your wallet first',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      // Convert chain ID to bigint
      const chainId = BigInt(targetChain);
      
      // Send tokens
      await sendTokens(
        address as `0x${string}`,
        amount,
        chainId
      );

      toast({
        title: 'Success',
        description: 'Transfer initiated successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: err instanceof Error ? err.message : 'Transfer failed',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <VStack spacing={4} align="stretch">
        <Heading size="md">Test DeBridge Integration</Heading>
        
        <FormControl>
          <FormLabel>Amount (ETH)</FormLabel>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Target Chain</FormLabel>
          <Select
            value={targetChain}
            onChange={(e) => setTargetChain(e.target.value)}
            placeholder="Select target chain"
          >
            <option value={CHAIN_IDS.ETHEREUM.toString()}>Ethereum</option>
            <option value={CHAIN_IDS.POLYGON.toString()}>Polygon</option>
            <option value={CHAIN_IDS.BSC.toString()}>BSC</option>
            <option value={CHAIN_IDS.TOMO.toString()}>TomoChain</option>
          </Select>
        </FormControl>

        <Button
          colorScheme="blue"
          onClick={handleTransfer}
          isLoading={loading}
          loadingText="Processing..."
        >
          Send Tokens
        </Button>

        {error && (
          <Text color="red.500">
            Error: {error}
          </Text>
        )}
      </VStack>
    </Box>
  );
} 