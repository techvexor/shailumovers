import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  PackageCheck,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: PackageCheck,
    title: "Professional Packing",
    description:
      "Expert packing of all household items using premium quality materials and techniques.",
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description:
      "Complete transit insurance coverage up to ₹5 lakhs for total peace of mind.",
  },
  {
    icon: Truck,
    title: "Safe Transportation",
    description:
      "GPS-tracked vehicles with air-suspension for damage-free transportation.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Guaranteed on-time pickup and delivery with 99% punctuality record.",
  },
  {
    icon: Home,
    title: "Unpacking & Setup",
    description:
      "Complete unpacking and room-wise arrangement at your new home.",
  },
  {
    icon: CheckCircle,
    title: "Damage-Free Promise",
    description:
      "Multi-layer wrapping and padding ensures zero damage to your belongings.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Survey & Quote",
    description:
      "Our team visits your home, assesses items, and provides a transparent quote with no hidden charges.",
  },
  {
    step: "02",
    title: "Systematic Packing",
    description:
      "We use high-grade cartons, bubble wrap, foam sheets, and custom crating for fragile items.",
  },
  {
    step: "03",
    title: "Safe Loading",
    description:
      "Trained handlers load items systematically with proper labeling for easy identification.",
  },
  {
    step: "04",
    title: "Secure Transit",
    description:
      "GPS-tracked vehicles ensure real-time monitoring. Your belongings are fully insured during transit.",
  },
  {
    step: "05",
    title: "Unpack & Settle",
    description:
      "We unload, unpack, and arrange everything in your new home. Quality check before sign-off.",
  },
];

const HomeShiftingPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Home Shifting Services"
        subtitle="Complete household relocation with professional packing, safe transport, and hassle-free setup at your new home."
        breadcrumb="Home Shifting"
        image="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80"
      />

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-brand-orange/10 text-brand-orange font-semibold px-4 py-2 rounded-full text-sm mb-4">
              WHAT WE OFFER
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Comprehensive Home Shifting Solutions
            </h2>
            <p className="font-body text-lg text-gray-600">
              From 1 BHK to villas, we handle every type of household move with
              the utmost care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-brand-orange/50"
                >
                  <CardContent className="p-6">
                    <div className="bg-brand-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Home Shifting Process
            </h2>
            <p className="font-body text-lg text-gray-600">
              A streamlined 5-step process that ensures your move is smooth,
              organized, and stress-free.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-orange/30 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center text-white font-display text-2xl font-bold group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Transparent Pricing
            </h2>
            <p className="font-body text-lg text-gray-600">
              No hidden charges. Get an upfront quote before you commit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                type: "1-2 BHK",
                price: "₹3,000",
                suffix: "onwards",
                features: [
                  "Professional packing",
                  "Loading & unloading",
                  "Transportation",
                  "Basic insurance",
                ],
              },
              {
                type: "3-4 BHK",
                price: "₹6,000",
                suffix: "onwards",
                features: [
                  "Everything in 1-2 BHK",
                  "Premium packing materials",
                  "Furniture disassembly",
                  "Enhanced insurance",
                ],
                popular: true,
              },
              {
                type: "Villa / Bungalow",
                price: "₹12,000",
                suffix: "onwards",
                features: [
                  "Everything in 3-4 BHK",
                  "Custom crating",
                  "Dedicated supervisor",
                  "Full coverage insurance",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 border-2 ${
                  plan.popular
                    ? "border-brand-orange bg-brand-orange/5 shadow-xl"
                    : "border-gray-100 bg-white shadow-md"
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                    {plan.type}
                  </h3>
                  <div className="font-display text-4xl font-bold text-brand-orange">
                    {plan.price}
                  </div>
                  <span className="font-body text-sm text-gray-500">
                    {plan.suffix}
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      <span className="font-body text-gray-700 text-sm">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                  onClick={() => (window.location.href = "/get-quote")}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                500+
              </div>
              <div className="font-body text-sm text-gray-600">
                Homes Shifted
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                99%
              </div>
              <div className="font-body text-sm text-gray-600">
                On-Time Rate
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                4.9
              </div>
              <div className="font-body text-sm text-gray-600 flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-brand-orange text-brand-orange" />{" "}
                Rating
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                100%
              </div>
              <div className="font-body text-sm text-gray-600">Insured</div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
};

export default HomeShiftingPage;
