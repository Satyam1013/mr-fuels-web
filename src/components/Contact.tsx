import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Get in <span className="text-green-600">Touch</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions about MR Fuels? Our team is here to help you
              digitize your fuel station.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email us</p>
                  <p className="text-lg font-semibold text-gray-900">
                    support@mrfuels.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Call us</p>
                  <p className="text-lg font-semibold text-gray-900">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Visit us</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Fuel Plaza, Sector 62, Noida, UP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your station..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-zinc-950 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
