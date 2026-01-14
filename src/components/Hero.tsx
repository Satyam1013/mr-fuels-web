import Image from "next/image";

export default function Hero() {
  return (
    // changed bg to plain white to match the reference
    <section className="relative flex flex-col items-center pt-40 px-6 bg-white overflow-hidden min-h-screen">
      {/* 1. Typography Section */}
      <div className="text-center max-w-5xl mx-auto z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.1] mb-8">
          Smart Fuel Management
          {/* Gradient text span matches the 'Anything' style in your reference */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-green-400">
            for Modern Stations
          </span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 font-normal leading-relaxed">
          MR Fuels helps you track sales, tanks, machines, staff, and daily
          reports — all in one powerful platform.
        </p>

        <button className="mt-10 rounded-full bg-zinc-950 text-white px-10 py-4 font-medium text-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Get Started
        </button>
      </div>

      {/* 2. Bottom "Dashboard" Image Section */}
      {/* This mimics the dark card at the bottom of the NotebookLM page */}
      <div className="w-full max-w-6xl mx-auto mt-20 relative z-10">
        <div className="relative rounded-t-[2.5rem] overflow-hidden border-t border-x border-gray-200 shadow-2xl bg-zinc-900">
          {/* Dark overlay to make the image look like a 'Dark Mode' dashboard */}
          <div className="absolute inset-0 bg-zinc-950/20 z-10"></div>

          <Image
            src="/hero.png" // Your hero.png acts as the 'interface' preview
            alt="Dashboard Preview"
            width={1400}
            height={900}
            className="w-full h-auto object-cover opacity-90"
            priority
          />

          {/* Optional: Bottom fade if you want it to blend into the next section */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-900 to-transparent z-20"></div>
        </div>
      </div>

      {/* Optional: Subtle background glow behind the text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-100/40 blur-[120px] -z-0 rounded-full pointer-events-none" />
    </section>
  );
}
