import "./App.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SocialProof from "./SocialProof";
import Services from "./Services";
import { Analytics } from "@vercel/analytics/react";
import CallToAction from "./CallToAction";
function App() {
  return (
    <div className="px-4 overflow-hidden">
      <Analytics />
      <Navbar />
      <HeroSection />
      <SocialProof />
      <Services />
      <CallToAction />
    </div>
  );
}

export default App;
