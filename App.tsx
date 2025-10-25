import React, { useEffect } from 'react';
import { trackEvent, Events } from './services/analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ProductInAction from './components/ProductInAction';
import ChatDemo from './components/ChatDemo';
import Features from './components/Features';
import BenefitsMap from './components/BenefitsMap';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Urgency from './components/Urgency';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Declaring AOS for TypeScript as it's loaded from a CDN
declare const AOS: any;

const App: React.FC = () => {
  useEffect(() => {
    trackEvent(Events.VIEW_CONTENT);

    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      offset: 50, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Problem />
        <Solution />
        <ProductInAction />
        <ChatDemo />
        <Features />
        <BenefitsMap />
        <HowItWorks />
        <TargetAudience />
        <Urgency />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;