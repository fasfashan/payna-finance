import "./App.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SocialProof from "./SocialProof";
import Services from "./Services";
import CallToAction from "./CallToAction";
function App() {
  return (
    <div className="px-4">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <Services />
      <CallToAction />
    </div>
  );
}

export default App;
