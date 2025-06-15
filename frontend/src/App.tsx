import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
import Gallery from './pages/Gallery'
import Marketplace from './pages/Marketplace'
import Developers from './pages/Developers'
import Studio from './pages/Studio'
import Profile from './pages/Profile'
import { AuthProvider } from './contexts/AuthContext'
import { StoryProvider } from './contexts/StoryContext'
import { StoryIPRegistration } from './components/StoryIPRegistration'
import { SecureAuth } from './components/SecureAuth'

// Configure React Router future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <StoryProvider>
          <Router future={router.future}>
            <Navbar />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register-ip" element={<StoryIPRegistration />} />
              <Route path="/auth" element={<SecureAuth />} />

              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Overview />} />
                <Route path="geography" element={<Geography />} />
                <Route path="monthly" element={<Monthly />} />
                <Route path="breakdown" element={<Breakdown />} />
                <Route path="daily" element={<Daily />} />
              </Route>

              {/* Redirects */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </StoryProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
