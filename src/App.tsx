import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CreatorStudio from './pages/CreatorStudio';
import Marketplace from './pages/Marketplace';
import ListingDetails from './pages/ListingDetails';
import InvestorDashboard from './pages/InvestorDashboard';
import ProfileSettings from './pages/ProfileSettings';
import HelpFAQ from './pages/HelpFAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/creator-studio" element={<CreatorStudio />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/dashboard" element={<InvestorDashboard />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/help" element={<HelpFAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
