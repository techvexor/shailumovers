import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Building2,
  Package,
  Truck,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Shifting",
    description:
      "Complete household relocation with careful packing, safe transport, and setup at your new home. From 1 BHK to villas.",
    color: "bg-orange-50 text-brand-orange",
    hoverColor: "hover:border-brand-orange",
    link: "/home-shifting",
    features: [
      "Door-to-door service",
      "Professional packing",
      "Furniture disassembly/assembly",
      "Full insurance coverage",
    ],
  },
  {
    icon: Building2,
    title: "Office Relocation",
    description:
      "Professional office moving with minimal downtime. We handle IT equipment, furniture, and documents with expert care.",
    color: "bg-blue-50 text-brand-teal",
    hoverColor: "hover:border-brand-teal",
    link: "/office-relocation",
    features: [
      "Minimal business disruption",
      "IT equipment handling",
      "Weekend moves available",
      "Dedicated project manager",
    ],
  },
  {
    icon: Package,
    title: "Packing Services",
    description:
      "Expert packing with premium materials. Multi-layer protection for fragile, electronic, and valuable items.",
    color: "bg-purple-50 text-purple-600",
    hoverColor: "hover:border-purple-400",
    link: "/packing-services",
    features: [
      "Premium materials only",
      "Custom crating available",
      "Electronics-safe packing",
      "Fragile item specialists",
    ],
  },
  {
    icon: Truck,
    title: "Local Transport",
    description:
      "Reliable, GPS-tracked local delivery and transport for goods of all sizes. Diverse vehicle fleet available.",
    color: "bg-green-50 text-green-600",
    hoverColor: "hover:border-green-400",
    link: "/local-transport",
    features: [
      "GPS-tracked vehicles",
      "Various vehicle sizes",
      "Door-to-door delivery",
      "No fuel surcharges",
    ],
  },
  {
    icon: Users,
    title: "Loading & Unloading",
    description:
      "Professional loading and unloading crew with the right tools and training for safe handling of all items.",
    color: "bg-pink-50 text-pink-600",
    hoverColor: "hover:border-pink-400",
    link: "/loading-unloading",
    features: [
      "Trained professionals",
      "Heavy item specialists",
      "Room-wise placement",
      "Furniture reassembly",
    ],
  },
  {
    icon: Shield,
    title: "Storage Solutions",
    description:
      "Secure, climate-controlled, and insured storage facilities for short-term and long-term needs.",
    color: "bg-indigo-50 text-indigo-600",
    hoverColor: "hover:border-indigo-400",
    link: "/storage-solutions",
    features: [
      "24/7 CCTV monitoring",
      "Climate-controlled",
      "Flexible durations",
      "Full insurance",
    ],
  },
];

const OurServicesPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Our Moving Services"
        subtitle="Comprehensive moving solutions tailored to every need — from home shifting to commercial relocations and secure storage."
        breadcrumb="Our Services"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      />

      {/* All Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Everything You Need for a Perfect Move
            </h2>
            <p className="font-body text-lg text-gray-600">
              Choose from our range of professional services. Each one is
              designed for reliability, safety, and your complete satisfaction.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 ${service.hoverColor} overflow-hidden`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Icon & Title Side */}
                      <div className="md:w-1/3 p-6 lg:p-8 bg-gradient-to-br from-brand-cream to-white flex flex-col justify-center">
                        <div
                          className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">
                          {service.title}
                        </h3>
                        <p className="font-body text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features & CTA Side */}
                      <div className="md:w-2/3 p-6 lg:p-8 flex flex-col justify-center">
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
                              <span className="font-body text-sm text-gray-700 font-medium">
                                {f}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={service.link}
                            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="/get-quote"
                            className="inline-flex items-center gap-2 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Banner */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-3">
                The Shailu Movers Difference
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  stat: "500+",
                  label: "Successful Moves",
                  color: "text-brand-orange",
                },
                {
                  stat: "4.9/5",
                  label: "Customer Rating",
                  color: "text-brand-teal",
                },
                {
                  stat: "100%",
                  label: "Insurance Coverage",
                  color: "text-brand-orange",
                },
                {
                  stat: "24/7",
                  label: "Customer Support",
                  color: "text-brand-teal",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`font-display text-3xl font-bold ${item.color} mb-1`}
                  >
                    {item.stat}
                  </div>
                  <div className="font-body text-sm text-gray-600">
                    {item.label}
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

export default OurServicesPage;
