import Navbar from "./frontend/src/components/Navbar";
import Hero from "./frontend/src/components/Hero";
import Features from "./frontend/src/components/Features";
import Pipeline from "./frontend/src/components/Pipeline";
import Architecture from "./frontend/src/components/Architecture";
import DeploymentInfo from "./frontend/src/components/DeploymentInfo";
import TechStack from "./frontend/src/components/TechStack";
import Footer from "./frontend/src/components/Footer";

export default function App() {
  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen bg-grid">
      <Navbar />
      <Hero />
      <Features />
      <Pipeline />
      <Architecture />
      <DeploymentInfo />
      <TechStack />
      <Footer />
    </div>
  );
}
