import React, { useState } from 'react';
import { useDeBridge } from '../contexts/DeBridgeContext';
import {
  Box,
  Button,
  VStack,
  Text,
  useToast,
  Code,
  Divider
} from '@chakra-ui/react';

export function DeBridgeTest() {
  const { loading, error, sendTokens, CHAIN_IDS } = useDeBridge();
  const [testResults, setTestResults] = useState<string[]>([]);
  const toast = useToast();

  const addTestResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toISOString()}: ${result}`]);
  };

  const runTests = async () => {
    setTestResults([]);
    
    try {
      // Test 1: Contract Configuration
      addTestResult('Testing contract configuration...');
      if (CHAIN_IDS) {
        addTestResult('✅ Chain IDs configured correctly');
      } else {
        addTestResult('❌ Chain IDs not configured');
      }

      // Test 2: Send to Ethereum
      addTestResult('Testing transfer to Ethereum...');
      try {
        await sendTokens(
          '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
          '0.01',
          CHAIN_IDS.ETHEREUM
        );
        addTestResult('✅ Transfer to Ethereum successful');
      } catch (err) {
        addTestResult(`❌ Transfer to Ethereum failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }

      // Test 3: Send to TomoChain
      addTestResult('Testing transfer to TomoChain...');
      try {
        await sendTokens(
          '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
          '0.01',
          CHAIN_IDS.TOMO
        );
        addTestResult('✅ Transfer to TomoChain successful');
      } catch (err) {
        addTestResult(`❌ Transfer to TomoChain failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }

      // Test 4: Error Handling
      addTestResult('Testing error handling...');
      try {
        await sendTokens(
          '0xinvalid',
          '0.01',
          CHAIN_IDS.ETHEREUM
        );
        addTestResult('❌ Should have failed with invalid address');
      } catch (err) {
        addTestResult('✅ Properly handled invalid address');
      }

      toast({
        title: 'Tests Completed',
        description: 'Check the test results below',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

    } catch (err) {
      toast({
        title: 'Test Error',
        description: err instanceof Error ? err.message : 'Unknown error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">DeBridge Integration Test</Text>
        
        <Button
          colorScheme="purple"
          onClick={runTests}
          isLoading={loading}
          loadingText="Running Tests..."
        >
          Run Tests
        </Button>

        {error && (
          <Text color="red.500">Error: {error}</Text>
        )}

        <Divider />

        <Box>
          <Text fontWeight="bold" mb={2}>Test Results:</Text>
          <Code p={4} borderRadius="md" display="block" whiteSpace="pre-wrap">
            {testResults.length > 0
              ? testResults.join('\n')
              : 'No tests run yet'}
          </Code>
        </Box>
      </VStack>
    </Box>
  );
} 