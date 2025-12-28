import Layout from '../Layout';
import React from 'react';
import Hero from '../components/Hero';
import FeaturesHighlight from '../components/FeaturesHighlight';
import MobileMoneyHighlight from '../components/MobileMoneyHighlight';
import FeaturesGrid from '../components/FeaturesGrid';
import Clients from '../components/Clients';
import MultiStoreFeatures from '../components/MultiStoreFeatures';
import WhyChooseUs from '../components/WhyChooseUs';
import VideoSection from '../components/VideoSection';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import FooterCTA from '../components/FooterCTA';

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

Home.layout = (page: any) => <Layout>{page}</Layout>;
export default Home;





