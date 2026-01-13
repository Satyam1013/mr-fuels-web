export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50 via-white to-yellow-50" />

      <h2 className="text-5xl font-extrabold leading-tight max-w-3xl">
        Smart Fuel Management for
        <span className="text-green-700"> Modern Fuel Stations</span>
      </h2>

      <p className="mt-6 max-w-xl text-gray-600">
        MR Fuels helps you track sales, tanks, machines, staff, and daily
        reports — all in one powerful platform.
      </p>

      <button className="mt-10 rounded-full bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700">
        Get Started
      </button>
    </section>
  );
}
