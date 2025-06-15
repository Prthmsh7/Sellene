import React from 'react';
import { IPRegistration } from './components/IPRegistration';
import { StoryProtocolProvider } from '@story-protocol/react-sdk';
import { STORY_PROTOCOL_CONFIG } from './config/storyProtocol';
import './App.css';

const App = () => {
  return (
    <StoryProtocolProvider
      config={{
        rpcUrl: STORY_PROTOCOL_CONFIG.rpcUrl,
        chainId: STORY_PROTOCOL_CONFIG.chainId,
        apiUrl: import.meta.env.VITE_STORY_API_URL,
      }}
    >
      <div className="app">
        <header className="app-header">
          <h1>IP Registration</h1>
        </header>
        <main className="app-main">
          <IPRegistration />
        </main>
      </div>
    </StoryProtocolProvider>
  );
};

export default App;
