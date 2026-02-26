import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

const serviceAreas = [
  {
    city: "Noida",
    areas: [
      "Sector 101",
      "Sector 62",
      "Sector 51",
      "Sector 93",
      "Sector 119",
      "Sector 18",
      "Sector 44",
      "Sector 76",
    ],
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80",
    description: "Complete coverage across all sectors of Noida.",
  },
  {
    city: "Greater Noida",
    areas: [
      "Knowledge Park",
      "Omicron",
      "Ecotech Extension",
      "Site V",
      "Greater Noida West",
      "Pari Chowk",
      "Alpha",
      "Beta",
    ],
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    description: "Serving all areas including Noida Extension.",
  },
  {
    city: "Delhi NCR",
    areas: [
      "East Delhi",
      "South Delhi",
      "West Delhi",
      "North Delhi",
      "Central Delhi",
      "New Delhi",
      "Dwarka",
      "Rohini",
    ],
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    description: "Pan-Delhi coverage with specialized teams.",
  },
  {
    city: "Gurgaon",
    areas: [
      "DLF Phase 1-5",
      "Sector 31",
      "Sector 12",
      "Cyber Hub",
      "MG Road",
      "Sohna Road",
      "Golf Course Road",
      "Manesar",
    ],
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    description: "Corporate and residential moving across Gurgaon.",
  },
  {
    city: "Faridabad",
    areas: [
      "Sector 7",
      "Sector 15",
      "Sector 16",
      "Old City",
      "Escorts Chowk",
      "NIT",
      "Sector 21",
      "Ballabgarh",
    ],
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80",
    description: "Comprehensive moving services in Faridabad.",
  },
  {
    city: "Ghaziabad",
    areas: [
      "Raj Nagar",
      "Indirapuram",
      "Vaishali",
      "Kavi Nagar",
      "Vasundhara",
      "Crossing Republic",
      "Loni",
      "Mohan Nagar",
    ],
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    description: "Full service coverage across Ghaziabad.",
  },
];

const ServiceAreasPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Our Service Areas"
        subtitle="Professional moving services across Delhi NCR and major cities across India. Find your location below."
        breadcrumb="Service Areas"
        image="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80"
      />

      {/* Areas Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Delhi NCR Coverage
            </h2>
            <p className="font-body text-lg text-gray-600">
              We operate across the entire Delhi NCR region with dedicated teams
              in each city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-brand-orange cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                      <h3 className="font-display text-2xl font-bold">
                        {area.city}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-white/80 mt-1">
                      {area.description}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-brand-navy mb-2">
                      Popular Areas:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.areas.map((location, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="/get-quote"
                    className="inline-flex items-center text-brand-orange font-semibold group-hover:gap-2 transition-all text-sm"
                  >
                    Get Quote for {area.city}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pan India */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-3">
                Pan-India Coverage
              </h2>
              <p className="font-body text-lg text-gray-600">
                Beyond Delhi NCR, we provide long-distance moving services to
                major cities across India.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Mumbai",
                "Bangalore",
                "Chennai",
                "Hyderabad",
                "Pune",
                "Kolkata",
                "Jaipur",
                "Lucknow",
                "Chandigarh",
                "Ahmedabad",
                "Dehradun",
                "Bhopal",
              ].map((city, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-brand-cream rounded-lg p-3"
                >
                  <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span className="font-body text-sm font-medium text-brand-navy">
                    {city}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-orange mb-1">
                  50+
                </div>
                <div className="font-body text-sm text-gray-600">
                  Cities Covered
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-orange mb-1">
                  28
                </div>
                <div className="font-body text-sm text-gray-600">
                  States Served
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-orange mb-1">
                  500+
                </div>
                <div className="font-body text-sm text-gray-600">
                  Pin Codes
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-orange mb-1">
                  100%
                </div>
                <div className="font-body text-sm text-gray-600">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto font-body text-gray-700 leading-relaxed space-y-4">
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">
              Professional Moving Services Across India
            </h3>
            <p>
              <strong>Shailu Movers</strong> is your trusted partner for{" "}
              <strong>home shifting</strong>,{" "}
              <strong>office relocation</strong>, and{" "}
              <strong>local transport services</strong> in{" "}
              <strong>Sector 101, Noida</strong>. With professional expertise, we
              specialize in providing safe, reliable, and affordable moving
              solutions across the Delhi NCR region.
            </p>
            <p>
              Our services extend across{" "}
              <strong>
                Noida, Greater Noida, Delhi, Gurgaon, Faridabad, and Ghaziabad
              </strong>
              . Whether you're moving within Noida or relocating to another city,
              our team of professional movers ensures a smooth and stress-free
              experience.
            </p>
            <p>
              We offer door-to-door pickup and delivery, professional packing
              services, loading and unloading assistance, and secure storage
              solutions. All moves are fully insured with coverage up to ₹5
              lakhs, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
};

export default ServiceAreasPage;
