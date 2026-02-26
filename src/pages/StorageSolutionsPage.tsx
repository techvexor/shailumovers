import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Thermometer,
  Camera,
  CheckCircle,
  ArrowRight,
  Clock,
  Package,
} from "lucide-react";

const storageTypes = [
  {
    title: "Short-Term Storage",
    duration: "1 day – 1 month",
    price: "₹500/day",
    description:
      "Perfect for gap periods between moves, renovations, or temporary relocations.",
    features: [
      "Flexible daily rates",
      "No minimum commitment",
      "Quick access to items",
      "Loading/unloading included",
    ],
  },
  {
    title: "Long-Term Storage",
    duration: "1 month+",
    price: "₹3,000/month",
    description:
      "Ideal for extended storage needs — travel, overseas moves, or seasonal storage.",
    features: [
      "Discounted monthly rates",
      "Climate-controlled units",
      "Regular maintenance checks",
      "Inventory management",
    ],
    popular: true,
  },
  {
    title: "Warehouse Storage",
    duration: "Custom",
    price: "Custom Quote",
    description:
      "Large-scale storage for businesses, bulk inventory, and commercial goods.",
    features: [
      "Dedicated warehouse space",
      "Forklift and pallet handling",
      "24/7 security access",
      "Insurance included",
    ],
  },
];

const features = [
  {
    icon: Lock,
    title: "24/7 Security",
    description:
      "Round-the-clock security guards, access control systems, and perimeter fencing.",
  },
  {
    icon: Camera,
    title: "CCTV Monitoring",
    description:
      "High-definition cameras with night vision covering all areas of the facility.",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description:
      "Temperature and humidity-controlled units for sensitive items like electronics and documents.",
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description:
      "Comprehensive insurance coverage for all stored items against theft, fire, and natural disasters.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description:
      "Optional professional packing service before storage to ensure maximum protection.",
  },
  {
    icon: Clock,
    title: "Flexible Access",
    description:
      "Access your stored items during business hours with advance notice. Emergency access available.",
  },
];

const StorageSolutionsPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Secure Storage Solutions"
        subtitle="Climate-controlled, insured, and 24/7 monitored storage facilities for your belongings during any transition period."
        breadcrumb="Storage Solutions"
        image="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=1200&q=80"
      />

      {/* Storage Plans */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-indigo-50 text-indigo-600 font-semibold px-4 py-2 rounded-full text-sm mb-4">
              STORAGE PLANS
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Flexible Storage Options
            </h2>
            <p className="font-body text-lg text-gray-600">
              From a few days to several months, we have the perfect storage plan
              for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {storageTypes.map((plan, index) => (
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
                    BEST VALUE
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
                    {plan.title}
                  </h3>
                  <div className="font-body text-sm text-gray-500 mb-3">
                    {plan.duration}
                  </div>
                  <div className="font-display text-3xl font-bold text-brand-orange">
                    {plan.price}
                  </div>
                </div>
                <p className="font-body text-sm text-gray-600 mb-4">
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      <span className="font-body text-sm text-gray-700">
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

      {/* Security Features */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Your Belongings Are Safe With Us
            </h2>
            <p className="font-body text-lg text-gray-600">
              State-of-the-art security and facility management for complete
              peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-indigo-200"
                >
                  <CardContent className="p-6">
                    <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
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

      {/* What to Store */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-navy to-[#1e3a5f] rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              What Can You Store?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { item: "Furniture", emoji: "🪑" },
                { item: "Electronics", emoji: "📺" },
                { item: "Documents", emoji: "📄" },
                { item: "Clothing", emoji: "👔" },
                { item: "Kitchenware", emoji: "🍳" },
                { item: "Books", emoji: "📚" },
                { item: "Sports Gear", emoji: "⚽" },
                { item: "Seasonal Items", emoji: "🎄" },
              ].map((category, i) => (
                <div
                  key={i}
                  className="text-center bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl mb-2">{category.emoji}</div>
                  <div className="font-body text-sm font-medium">
                    {category.item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
};

export default StorageSolutionsPage;
