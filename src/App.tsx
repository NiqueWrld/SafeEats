import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Users, School, QrCode, BookOpen, LineChart, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Pages
import Home from './pages/Home';
import VendorPortal from './pages/VendorPortal';
import SchoolDashboard from './pages/SchoolDashboard';
import PublicTools from './pages/PublicTools';
import TrainingHub from './pages/TrainingHub';
import ComplianceTracker from './pages/ComplianceTracker';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/', icon: Shield },
    { name: 'Vendor Portal', path: '/vendor', icon: Users },
    { name: 'School Dashboard', path: '/school', icon: School },
    { name: 'Public Tools', path: '/tools', icon: QrCode },
    { name: 'Training Hub', path: '/training', icon: BookOpen },
    { name: 'Compliance Tracker', path: '/compliance', icon: LineChart },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Shield className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">SafeEats</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-green-700 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 mr-2" />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendor" element={<VendorPortal />} />
            <Route path="/school" element={<SchoolDashboard />} />
            <Route path="/tools" element={<PublicTools />} />
            <Route path="/training" element={<TrainingHub />} />
            <Route path="/compliance" element={<ComplianceTracker />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <Shield className="h-6 w-6" />
                <span className="ml-2 text-lg font-semibold">SafeEats</span>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-400">© 2025 SafeEats. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;