import { Check } from "lucide-react";
import plans from "../data/pricing.json";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent <span className="text-green-600">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your business scale. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlight
                  ? "border-green-600 shadow-xl md:scale-105 z-10 bg-green-50/30"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{plan.duration}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <Check className="h-5 w-5 text-green-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all ${
                  plan.highlight
                    ? "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-200"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
