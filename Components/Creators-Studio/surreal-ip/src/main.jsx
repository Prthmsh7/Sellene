import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { WagmiConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

// 1. Get a Project ID from https://cloud.walletconnect.com/
const projectId = '50969e09f4f0f7b1e7b0c549efac3e34'

// 2. Create wagmiConfig
const metadata = {
  name: 'Surreal IP Registry',
  description: 'Surreal IP Registry dApp',
  url: 'http://localhost:5173',
  icons: ['https://avatars.githubusercontent.com/u/37784886'] // Replace with your app icon url
}

const chains = [sepolia]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
)
