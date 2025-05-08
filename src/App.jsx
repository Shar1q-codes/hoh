import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import SectionWhy from './components/SectionWhy';
import SectionJury from './components/SectionJury';
import SectionAdvisory from './components/SectionAdvisory';
import SectionGuests from './components/SectionGuests';
import SectionSponsors from './components/SectionSponsors';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navigation />
            <main>
              <HeroSection />
              <SectionWhy />
              <SectionJury />
              <SectionAdvisory />
              <SectionGuests />
              <SectionSponsors />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
