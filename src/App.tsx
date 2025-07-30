import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import StartupsSection from './StartupsSection';
import CreatorsSection from './CreatorsSection';
import JourneySection from './JourneySection';
import MentorsSection from './MentorsSection';
import VisionSection from './VisionSection';
import GallerySection from './GallerySection';
import JoinSection from './JoinSection';
import Footer from './Footer';

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