import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Package,
  Shield,
  Layers,
  Box,
  CheckCircle,
  Gem,
  Wine,
  Monitor,
} from "lucide-react";

const packingTypes = [
  {
    icon: Box,
    title: "Standard Packing",
    description:
      "Quality cartons and wrapping for everyday household items, clothes, books, and kitchenware.",
    color: "bg-orange-50 text-brand-orange",
  },
  {
    icon: Gem,
    title: "Premium Packing",
    description:
      "Multi-layer bubble wrap, foam sheets, and custom cartons for delicate and valuable items.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Wine,
    title: "Fragile Items",
    description:
      "Specialized crating and cushioning for glassware, crockery, artwork, and antiques.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Monitor,
    title: "Electronics Packing",
    description:
      "Anti-static packaging and secure boxing for TVs, computers, and other electronics.",
    color: "bg-blue-50 text-brand-teal",
  },
  {
    icon: Layers,
    title: "Furniture Wrapping",
    description:
      "Stretch wrap, moving blankets, and corner protectors for furniture and large items.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Shield,
    title: "Custom Crating",
    description:
      "Wooden crates built to specifications for high-value, oversized, or irregularly shaped items.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

const materials = [
  "5-ply corrugated boxes (various sizes)",
  "Bubble wrap rolls (large & small bubble)",
  "Foam sheets & thermocol padding",
  "Stretch wrap & shrink wrap",
  "Packing tape (high adhesion)",
  "Corner protectors & edge guards",
  "Wardrobe boxes with hanging rails",
  "Dish pack kits with dividers",
  "Anti-static bags for electronics",
  "Wooden crates (custom sizes)",
  "Silica gel packets (moisture control)",
  "Labeling stickers & markers",
];

const PackingServicesPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Professional Packing Services"
        subtitle="Expert packing with premium materials ensures every item — from fragile glassware to heavy furniture — arrives safe and sound."
        breadcrumb="Packing Services"
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
      />

      {/* Packing Types */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-purple-50 text-purple-600 font-semibold px-4 py-2 rounded-full text-sm mb-4">
              PACKING SOLUTIONS
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Packing for Every Need
            </h2>
            <p className="font-body text-lg text-gray-600">
              Whether it's a single fragile vase or an entire household, our
              packing experts have it covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-brand-orange/50"
                >
                  <CardContent className="p-6">
                    <div
                      className={`${type.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                      {type.title}
                    </h3>
                    <p className="font-body text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Premium Packing Materials
              </h2>
              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                We use only the highest quality packing materials — no
                second-hand or recycled boxes. Your belongings deserve the best
                protection.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {materials.map((material, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    <span className="font-body text-sm text-gray-700">
                      {material}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="Packing materials"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Packing */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-navy to-[#1e3a5f] rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <Package className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold mb-3">
                Why Professional Packing Matters
              </h2>
              <p className="font-body text-white/80 text-lg">
                DIY packing leads to 60% more damage during moves. Here's why
                professional packing is worth it.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: "95%",
                  label: "Less damage",
                  desc: "Professional packing reduces transit damage dramatically",
                },
                {
                  stat: "3x",
                  label: "Faster unpacking",
                  desc: "Organized packing means faster settling into your new home",
                },
                {
                  stat: "100%",
                  label: "Insured",
                  desc: "All professionally packed items are covered by our insurance",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                    {item.stat}
                  </div>
                  <div className="font-body font-semibold mb-1">
                    {item.label}
                  </div>
                  <p className="font-body text-sm text-white/70">{item.desc}</p>
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

export default PackingServicesPage;
