import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  ArrowUp,
  ArrowDown,
  Shield,
  CheckCircle,
  HardHat,
  Weight,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: ArrowUp,
    title: "Professional Loading",
    description:
      "Our trained team handles every item with care — from lightweight boxes to heavy furniture and appliances.",
    features: [
      "Systematic room-by-room loading",
      "Heavy appliance handling",
      "Proper weight distribution in vehicle",
      "Protective wrapping before loading",
    ],
  },
  {
    icon: ArrowDown,
    title: "Expert Unloading",
    description:
      "Safe unloading with placement in designated rooms. We verify every item against the inventory list.",
    features: [
      "Room-wise placement",
      "Careful handling on stairs & elevators",
      "Inventory verification",
      "Furniture reassembly",
    ],
  },
];

const equipment = [
  {
    icon: HardHat,
    title: "Safety Gear",
    description:
      "All crew members wear proper safety equipment including gloves, steel-toe boots, and back braces.",
  },
  {
    icon: Weight,
    title: "Dollies & Trolleys",
    description:
      "Industrial-grade dollies, hand trucks, and furniture trolleys for efficient and safe handling.",
  },
  {
    icon: Wrench,
    title: "Disassembly Tools",
    description:
      "Complete toolkit for disassembling and reassembling furniture, beds, and large items.",
  },
  {
    icon: Shield,
    title: "Protective Materials",
    description:
      "Moving blankets, floor runners, and door frame protectors to prevent damage to your property.",
  },
];

const LoadingUnloadingPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Loading & Unloading Services"
        subtitle="Professional loading and unloading crew equipped with the right tools and training for safe handling of all your items."
        breadcrumb="Loading & Unloading"
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
      />

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-pink-50 text-pink-600 font-semibold px-4 py-2 rounded-full text-sm mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Safe Hands for Your Belongings
            </h2>
            <p className="font-body text-lg text-gray-600">
              Our trained loading & unloading team handles each item as if it
              were their own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-brand-orange/50"
                >
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-brand-orange to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                          <span className="font-body text-sm text-gray-700">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Professional Equipment
            </h2>
            <p className="font-body text-lg text-gray-600">
              The right tools make all the difference. Our crew comes fully
              equipped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-brand-orange/30 text-center group"
                >
                  <div className="bg-pink-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-pink-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Loading services"
                  className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white rounded-2xl p-5 shadow-xl">
                  <Users className="w-8 h-8 mb-1" />
                  <div className="font-display text-2xl font-bold">25+</div>
                  <div className="font-body text-xs opacity-90">
                    Trained Crew
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                  Items We Handle
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Heavy Furniture",
                      items: "Sofas, beds, wardrobes, dining tables, dressers",
                    },
                    {
                      title: "Appliances",
                      items:
                        "Refrigerators, washing machines, ACs, water purifiers",
                    },
                    {
                      title: "Electronics",
                      items:
                        "TVs, computers, home theater systems, gaming consoles",
                    },
                    {
                      title: "Fragile Items",
                      items:
                        "Glassware, crockery, artwork, mirrors, chandeliers",
                    },
                    {
                      title: "Special Items",
                      items: "Pianos, gym equipment, pool tables, safes",
                    },
                  ].map((category, i) => (
                    <div
                      key={i}
                      className="bg-brand-cream rounded-xl p-4 hover:bg-brand-orange/5 transition-colors"
                    >
                      <h4 className="font-display text-lg font-bold text-brand-navy mb-1">
                        {category.title}
                      </h4>
                      <p className="font-body text-sm text-gray-600">
                        {category.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
};

export default LoadingUnloadingPage;
