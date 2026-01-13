import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      {/* Background Image Container */}
      <div>
        <Image
          src="/hero.png"
          alt="Fuel Management Background"
          fill
          className="object-cover"
          priority
        />
        {/* Blending Overlay: Gradients make the text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-white/20 to-gray-50" />
      </div>

      <div className="relative z-10 mt-10">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl text-gray-900">
          Smart Fuel Management for
          <span className="text-green-700 block md:inline">
            {" "}
            Modern Fuel Stations
          </span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-lg text-gray-700 font-medium bg-white/30 backdrop-blur-sm rounded-lg p-2">
          MR Fuels helps you track sales, tanks, machines, staff, and daily
          reports — all in one powerful platform.
        </p>

        <button className="mt-10 rounded-full bg-green-600 px-10 py-4 text-white font-bold text-lg hover:bg-green-700 shadow-xl hover:shadow-green-500/20 transition-all transform hover:-translate-y-1">
          Get Started
        </button>
      </div>
    </section>
  );
}
