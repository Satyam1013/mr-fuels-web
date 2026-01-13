import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* This pushes the content down so the navbar doesn't cover it */}
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </div>
    </main>
  );
}
