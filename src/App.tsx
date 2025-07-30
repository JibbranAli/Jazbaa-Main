import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StartupsSection from './components/StartupsSection';
import CreatorsSection from './components/CreatorsSection';
import JourneySection from './components/JourneySection';
import MentorsSection from './components/MentorsSection';
import VisionSection from './components/VisionSection';
import GallerySection from './components/GallerySection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StartupsSection />
      <CreatorsSection />
      <JourneySection />
      <MentorsSection />
      <VisionSection />
      <GallerySection />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;