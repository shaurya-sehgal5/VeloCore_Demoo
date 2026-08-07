import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pipeline from "./components/Pipeline";
import Architecture from "./components/Architecture";
import DeploymentInfo from "./components/DeploymentInfo";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

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
