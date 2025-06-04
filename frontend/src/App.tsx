import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import CreatorDashboard from './pages/CreatorDashboard'
import InvestorDashboard from './pages/InvestorDashboard'
import Profile from './pages/Profile'
import Studio from './pages/Studio'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creator" element={<CreatorDashboard />} />
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
