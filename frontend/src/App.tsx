import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { PageTransition } from './components/PageTransition'
import theme from './theme'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import DashboardLayout from './components/DashboardLayout'
import Overview from './pages/Overview'
import Geography from './pages/Geography'
import Monthly from './pages/Monthly'
import Breakdown from './pages/Breakdown'
import Daily from './pages/Daily'
import Marketplace from './pages/Marketplace'
import Developers from './pages/Developers'
import Profile from './pages/Profile'
import { AuthProvider } from './contexts/AuthContext'
import { StoryProvider } from './contexts/StoryContext'
import { StoryIPRegistration } from './components/StoryIPRegistration'
import { SecureAuth } from './components/SecureAuth'
import { DeBridgeProvider } from './contexts/DeBridgeContext'
import { Toaster } from 'react-hot-toast'
import { WagmiConfig } from 'wagmi'
import { config } from './config/wagmi'

// Configure React Router future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
}

function AppRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/marketplace" element={<PageTransition><Marketplace /></PageTransition>} />
        <Route path="/developers" element={<PageTransition><Developers /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/register-ip" element={<PageTransition><StoryIPRegistration /></PageTransition>} />
        <Route path="/auth" element={<PageTransition><SecureAuth /></PageTransition>} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<PageTransition><Overview /></PageTransition>} />
          <Route path="geography" element={<PageTransition><Geography /></PageTransition>} />
          <Route path="monthly" element={<PageTransition><Monthly /></PageTransition>} />
          <Route path="breakdown" element={<PageTransition><Breakdown /></PageTransition>} />
          <Route path="daily" element={<PageTransition><Daily /></PageTransition>} />
        </Route>

        {/* Redirects */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig config={config}>
        <AuthProvider>
          <StoryProvider>
            <DeBridgeProvider>
              <Router future={router.future}>
                <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
                  <Navbar />
                  <main className="container mx-auto px-4 py-8">
                    <AppRoutes />
                  </main>
                  <Toaster position="top-right" />
                </div>
              </Router>
            </DeBridgeProvider>
          </StoryProvider>
        </AuthProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default App
