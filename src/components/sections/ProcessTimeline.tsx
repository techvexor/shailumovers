import { ClipboardCheck, Calendar, Package, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Request Quote",
    description: "Share your moving details and get a free, no-obligation quote instantly.",
  },
  {
    icon: Calendar,
    title: "Schedule Move",
    description: "Choose your preferred date and time. We'll arrange everything accordingly.",
  },
  {
    icon: Package,
    title: "Pack & Load",
    description: "Our team arrives with quality packing materials and loads everything safely.",
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    description: "Your belongings are transported securely with real-time tracking available.",
  },
  {
    icon: CheckCircle,
    title: "Unpack & Settle",
    description: "We help you unload and unpack, ensuring everything is in perfect condition.",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            How It Works
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            Our streamlined process ensures a hassle-free moving experience from start to finish.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-teal transform -translate-y-1/2 z-0"></div>

          <div className="relative z-10 grid grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-brand-navy text-white font-display font-bold flex items-center justify-center text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6">
                {/* Left Side - Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-brand-navy text-white font-display font-bold flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                  </div>
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-brand-orange to-brand-teal mx-auto mt-4"></div>
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 pb-8">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-20 bg-gradient-to-r from-brand-cream to-white rounded-3xl p-8 lg:p-12 border-2 border-brand-orange/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-3xl font-bold text-brand-navy mb-4">
              Ready to Get Started?
            </h3>
            <p className="font-body text-lg text-gray-600 mb-8">
              Get your personalized moving quote in less than 60 seconds. No hidden charges, no obligations.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-lg"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
