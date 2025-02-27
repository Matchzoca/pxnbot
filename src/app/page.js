import Image from "next/image";
import PixelBotSection from "./components/PixelBotSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ComandosSection from "./components/ComandosSection";
import EmailSection from "./components/EmailSection";
import FooterPXN from "./components/FooterPXN";
import ConquistasSection from "./components/ConquistasSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <PixelBotSection />
        <ConquistasSection />
        <AboutSection />
        <ComandosSection />
        <EmailSection />
      </div>
      <FooterPXN />
    </main>
  );
}

// <Featured /> 