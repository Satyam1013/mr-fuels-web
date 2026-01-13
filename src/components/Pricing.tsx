import { Check } from "lucide-react";

const plans = [
  {
    name: "Trial Plan",
    duration: "1 Month",
    price: "Free",
    originalPrice: null,
    description: "Perfect for exploring the platform and testing our features.",
    features: [
      "All Core Features",
      "1 Fuel Station",
      "Daily Reports",
      "Email Support",
    ],
    buttonText: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Pro Plan",
    duration: "3 Months",
    price: "₹999",
    originalPrice: "₹1,199",
    description:
      "Ideal for small stations looking to digitize their operations.",
    features: [
      "All Trial Features",
      "Priority Support",
      "Expense Analytics",
      "Export to PDF/Excel",
    ],
    buttonText: "Get Pro Now",
    highlight: true, // This will make the card pop
  },
  {
    name: "Premium Plan",
    duration: "1 Year",
    price: "₹3,999",
    originalPrice: "₹4,999",
    description:
      "Best value for established businesses seeking long-term growth.",
    features: [
      "Everything in Pro",
      "Multi-user Access",
      "Advanced Inventory Tracking",
      "24/7 Dedicated Support",
    ],
    buttonText: "Get Premium",
    highlight: false,
  },
];

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
              className={`relative flex flex-col p-8 rounded-3xl border ${
                plan.highlight
                  ? "border-green-600 shadow-xl scale-105 z-10 bg-green-50/30"
                  : "border-gray-200 bg-white"
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
                    ? "bg-green-600 text-white hover:bg-green-700"
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
