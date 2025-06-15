import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { useConnectModal } from '@tomo-inc/tomo-evm-kit';

interface AuthContextType {
  isAuthenticated: boolean;
  address: string | undefined;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [loading, setLoading] = useState(false);

  const connect = async () => {
    try {
      setLoading(true);
      await openConnectModal();
    } catch (error) {
      console.error('Failed to connect:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const disconnect = async () => {
    try {
      setLoading(true);
      // Implement disconnect logic if needed
    } catch (error) {
      console.error('Failed to disconnect:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isConnected,
        address,
        connect,
        disconnect,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 