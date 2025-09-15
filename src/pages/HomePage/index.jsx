import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import RoadmapSection from './components/RoadmapSection';
import VisionMissionSection from './components/VisionMissionSection'; // Import the new component
import FeaturedServices from './components/FeaturedServices';
import FeaturedProjects from './components/FeaturedProjects';
import CallToAction from './components/CallToAction';

const HomePage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  return (
    <>
      <Header />
      <main className="bg-soft-cool-gray">
        <HeroSection 
          onContactClick={handleContactClick} 
          
          onLearnMoreClick={handleLearnMoreClick} 
        />
        <RoadmapSection />
        <VisionMissionSection /> {/* Add the new component here */}
        {/* <FeaturedServices /> */}
        <FeaturedProjects />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;