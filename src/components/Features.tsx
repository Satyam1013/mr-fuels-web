import {
  Users,
  Droplets,
  ClipboardList,
  BarChart3,
  CreditCard,
  LayoutDashboard,
} from "lucide-react";

const featuresData = [
  {
    title: "Onboarding & Plans",
    icon: <Users className="h-6 w-6 text-green-600" />,
    description: "Seamless entry into the platform.",
    items: [
      "Secure Login & Signup Pages",
      "Subscription Management",
      "User Role Management",
    ],
  },
  {
    title: "Dashboard & Expenses",
    icon: <LayoutDashboard className="h-6 w-6 text-green-600" />,
    description: "Complete overview of your daily finances.",
    items: [
      "Interactive Home Page Dashboard",
      "Pump Expense Tracking",
      "Personal Expense Logging",
      "Credit Customer Management",
    ],
  },
  {
    title: "Stock Management",
    icon: <Droplets className="h-6 w-6 text-green-600" />,
    description: "Track every drop of fuel entering your station.",
    items: [
      "Truck Decantation Entry",
      "Purchase Entry & History",
      "Tank Level Monitoring",
    ],
  },
  {
    title: "Staff Management",
    icon: <ClipboardList className="h-6 w-6 text-green-600" />,
    description: "Manage your workforce efficiently.",
    items: [
      "Daily Staff Attendance",
      "Salary Calculations",
      "Staff Performance Tracking",
    ],
  },
  {
    title: "Shift Operations",
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
    description: "Detailed breakdown of every shift.",
    items: [
      "Shift-wise Sales Reporting",
      "Nozzle Reading Entry",
      "Cash & Digital Collection Reconciliation",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to run your{" "}
            <span className="text-green-600">Fuel Station</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From tank to bank, MR Fuels covers every aspect of your daily
            operations with precision and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-green-50 p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700 text-sm font-medium"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
