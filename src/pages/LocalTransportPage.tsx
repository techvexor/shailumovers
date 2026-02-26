import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Navigation,
  Fuel,
  Gauge,
} from "lucide-react";

const vehicleTypes = [
  {
    name: "Mini Truck",
    capacity: "Up to 1 Ton",
    ideal: "1 BHK, small office",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
  {
    name: "Tempo (407)",
    capacity: "Up to 2.5 Tons",
    ideal: "2-3 BHK, medium office",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
  },
  {
    name: "Large Truck",
    capacity: "Up to 5 Tons",
    ideal: "4+ BHK, large office, warehouse",
    image: "https://images.unsplash.com/photo-1586191582002-1d3e7b8c7069?w=600&q=80",
  },
];

const features = [
  {
    icon: Navigation,
    title: "GPS Tracking",
    description:
      "Real-time tracking of your shipment. Know exactly where your belongings are at all times.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "All goods in transit are covered by comprehensive insurance for complete protection.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description:
      "We commit to delivery timelines and maintain a 99% on-time delivery record.",
  },
  {
    icon: Fuel,
    title: "No Fuel Surcharges",
    description:
      "Transparent pricing includes fuel costs. No surprise charges on delivery day.",
  },
  {
    icon: Gauge,
    title: "Well-Maintained Fleet",
    description:
      "All vehicles undergo regular maintenance and safety inspections before every trip.",
  },
  {
    icon: MapPin,
    title: "Door-to-Door",
    description:
      "Complete pickup from your doorstep and delivery right to the destination address.",
  },
];

const LocalTransportPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Local Transport Services"
        subtitle="Reliable, GPS-tracked local delivery and transport for goods of all sizes across Delhi NCR and beyond."
        breadcrumb="Local Transport"
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80"
      />

      {/* Vehicle Fleet */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-green-50 text-green-600 font-semibold px-4 py-2 rounded-full text-sm mb-4">
              OUR FLEET
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Right Vehicle for Every Need
            </h2>
            <p className="font-body text-lg text-gray-600">
              Choose from our diverse fleet of well-maintained vehicles, each
              suited for different load sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-brand-orange"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Truck className="w-6 h-6 text-brand-orange mb-1" />
                    <h3 className="font-display text-2xl font-bold text-white">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-gray-500 text-sm">
                        Capacity
                      </span>
                      <span className="font-body font-semibold text-brand-navy">
                        {vehicle.capacity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-gray-500 text-sm">
                        Ideal For
                      </span>
                      <span className="font-body font-semibold text-brand-navy text-sm">
                        {vehicle.ideal}
                      </span>
                    </div>
                  </div>
                  <button
                    className="w-full mt-4 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105"
                    onClick={() => (window.location.href = "/get-quote")}
                  >
                    Book This Vehicle
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Our Transport is Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-brand-orange/30"
                >
                  <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-navy to-[#1e3a5f] rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Extensive Coverage Area
                </h2>
                <p className="font-body text-white/80 mb-6">
                  Our local transport network covers the entire Delhi NCR region
                  and extends to major cities across North India.
                </p>
                <div className="space-y-3">
                  {[
                    "Noida & Greater Noida",
                    "Delhi (All Zones)",
                    "Gurgaon & Faridabad",
                    "Ghaziabad & Meerut",
                    "Pan-India long distance",
                  ].map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="font-body text-white/90">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "10+", label: "Vehicles" },
                  { stat: "50+", label: "Cities" },
                  { stat: "24/7", label: "Availability" },
                  { stat: "99%", label: "On-Time" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center bg-white/10 rounded-xl p-5"
                  >
                    <div className="font-display text-3xl font-bold text-brand-orange">
                      {item.stat}
                    </div>
                    <div className="font-body text-sm text-white/80">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
};

export default LocalTransportPage;
