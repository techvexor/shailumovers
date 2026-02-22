import { Shield, Clock, Award, Users } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Shield,
    title: "Fully Insured",
    description: "Complete insurance coverage for your belongings during transit, giving you peace of mind.",
    highlight: "₹5 Lakh coverage",
  },
  {
    number: "02",
    icon: Clock,
    title: "On-Time Delivery",
    description: "We value your time. Our team ensures punctual pickup and delivery as per schedule.",
    highlight: "99% on-time rate",
  },
  {
    number: "03",
    icon: Award,
    title: "Experienced Team",
    description: "Trained professionals with years of experience in handling all types of moves safely.",
    highlight: "10+ years expertise",
  },
  {
    number: "04",
    icon: Users,
    title: "Customer First",
    description: "24/7 customer support and personalized service to make your move stress-free.",
    highlight: "500+ happy customers",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Why Choose Shailu Movers?
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            We're not just movers—we're your trusted partners in making every transition smooth and worry-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Number Background */}
                <div className="absolute -top-4 -left-4 font-display text-8xl font-bold text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors duration-300">
                  {feature.number}
                </div>

                {/* Content */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-brand-orange">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-brand-orange to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 rounded-full">
                    <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></div>
                    <span className="font-body font-semibold text-brand-teal text-sm">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-brand-navy to-[#1e3a5f] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="border-r border-white/20 last:border-r-0">
              <div className="font-display text-4xl lg:text-5xl font-bold text-brand-orange mb-2">2,847</div>
              <div className="font-body text-white/90">Successful Moves</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0">
              <div className="font-display text-4xl lg:text-5xl font-bold text-brand-orange mb-2">15+</div>
              <div className="font-body text-white/90">Years Experience</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0">
              <div className="font-display text-4xl lg:text-5xl font-bold text-brand-orange mb-2">25+</div>
              <div className="font-body text-white/90">Professional Team</div>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-brand-orange mb-2">10+</div>
              <div className="font-body text-white/90">Modern Vehicles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
