import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import theme from './theme'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Overview from './pages/Overview'
import Geography from './pages/Geography'
import Monthly from './pages/Monthly'
import Breakdown from './pages/Breakdown'
import Daily from './pages/Daily'
import DashboardLayout from './components/DashboardLayout'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="geography" element={<Geography />} />
            <Route path="monthly" element={<Monthly />} />
            <Route path="breakdown" element={<Breakdown />} />
            <Route path="daily" element={<Daily />} />
            <Route path="portfolio" element={<Navigate to="/dashboard/overview" replace />} />
            <Route path="marketplace" element={<Navigate to="/dashboard/overview" replace />} />
            <Route path="history" element={<Navigate to="/dashboard/overview" replace />} />
            <Route path="music" element={<Navigate to="/dashboard/breakdown" replace />} />
            <Route path="art" element={<Navigate to="/dashboard/breakdown" replace />} />
            <Route path="writing" element={<Navigate to="/dashboard/breakdown" replace />} />
          </Route>

          {/* Redirects */}
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/creator" element={<Navigate to="/products" replace />} />
          <Route path="/investor" element={<Navigate to="/dashboard" replace />} />
          <Route path="/studio" element={<Navigate to="/products" replace />} />
          <Route path="/profile" element={<Navigate to="/dashboard" replace />} />
          <Route path="/settings" element={<Navigate to="/dashboard" replace />} />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
