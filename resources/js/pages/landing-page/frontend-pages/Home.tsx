import React from 'react';
import Hero from '../frontend-components/Hero';
import FeaturesHighlight from '../frontend-components/FeaturesHighlight';
import MobileMoneyHighlight from '../frontend-components/MobileMoneyHighlight';
import FeaturesGrid from '../frontend-components/FeaturesGrid';
import Clients from '../frontend-components/Clients';
import MultiStoreFeatures from '../frontend-components/MultiStoreFeatures';
import WhyChooseUs from '../frontend-components/WhyChooseUs';
import VideoSection from '../frontend-components/VideoSection';
import Pricing from '../frontend-components/Pricing';
import Testimonials from '../frontend-components/Testimonials';
import FAQ from '../frontend-components/FAQ';
import Team from '../frontend-components/Team';
import FooterCTA from '../frontend-components/FooterCTA';

const Home: React.FC = () => {
  return (
    <>
      {/* 1. HERO - Hook & Value Proposition */}
      <Hero />
      
      {/* 2. QUICK SOCIAL PROOF - Build Trust Immediately */}
      <div className="bg-white rounded-t-[3rem] -mt-10 relative z-10 overflow-hidden shadow-2xl shadow-black/5">
         <Clients />
      </div>
      
      {/* 3. REVENUE ENGINE - The Big Promise (Create Excitement Early) */}
      <div className="bg-white py-24">
        <FeaturesHighlight />
      </div>
      
      {/* 4. MOBILE MONEY - Key Differentiator (Right After Promise) */}
      <MobileMoneyHighlight />
      
      {/* 5. FEATURES GRID - Show All Capabilities */}
      <div className="bg-white py-24">
        <FeaturesGrid />
      </div>
      
      {/* 6. VIDEO SECTION - Visual Excitement & Engagement */}
      <VideoSection />
      
      {/* 7. MULTI-STORE FEATURES - Use Cases & Versatility */}
      <MultiStoreFeatures />
      
      {/* 8. WHY CHOOSE US - Build Trust & Credibility */}
      <WhyChooseUs />
      
      {/* 9. TESTIMONIALS - Social Proof & Real Stories */}
      <Testimonials />
      
      {/* 10. PRICING - After Building Desire */}
      <Pricing />
      
      {/* 11. FAQ - Remove Friction & Objections */}
      <FAQ />
      
      {/* 12. TEAM - Humanize the Brand */}
      <Team />
      
      {/* 13. FINAL CTA - Last Conversion Push */}
      <FooterCTA />
    </>
  );
};

export default Home;



