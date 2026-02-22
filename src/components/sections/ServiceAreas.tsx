import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const serviceAreas = [
  {
    city: "Noida",
    areas: ["Sector 101", "Sector 62", "Sector 51", "Sector 93", "Sector 119"],
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80",
  },
  {
    city: "Greater Noida",
    areas: ["Knowledge Park", "Omicron", "Ecotech Extn", "Site V", "West"],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  },
  {
    city: "Delhi NCR",
    areas: ["East Delhi", "South Delhi", "West Delhi", "North Delhi", "Central Delhi"],
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
  },
  {
    city: "Gurgaon",
    areas: ["DLF Phase", "Sector 31", "Sector 12", "Cyber Hub", "MG Road"],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    city: "Faridabad",
    areas: ["Sector 7", "Sector 15", "Sector 16", "Old City", "Escorts Chowk"],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  },
  {
    city: "Ghaziabad",
    areas: ["Raj Nagar", "Indirapuram", "Vaishali", "Kavi Nagar", "Vasundhara"],
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80",
  },
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-12 lg:py-16 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Service Areas
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            We provide professional moving services in Sector 101, Noida and across the Delhi NCR region. 
            Find your location and experience hassle-free relocation.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    <h3 className="font-display text-2xl font-bold">{area.city}</h3>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="font-semibold text-brand-navy mb-2">Popular Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {area.areas.map((location, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="inline-flex items-center text-brand-orange font-semibold group-hover:gap-2 transition-all mt-2">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Content Block */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border-2 border-gray-100 max-w-5xl mx-auto">
          <h3 className="font-display text-3xl font-bold text-brand-navy mb-5 text-center">
            Comprehensive Moving Services Across India
          </h3>
          <div className="font-body text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Shailu Movers</strong> is your trusted partner for <strong>home shifting</strong>, 
              <strong> office relocation</strong>, and <strong>local transport services</strong> in 
              <strong> Sector 101, Noida</strong>. With professional expertise, we specialize in providing 
              safe, reliable, and affordable moving solutions across the Delhi NCR region.
            </p>
            <p>
              Our services extend across <strong>Noida, Greater Noida, Delhi, Gurgaon, Faridabad, and Ghaziabad</strong>. 
              Whether you're moving within Noida or relocating to another city in NCR, our team of professional 
              movers ensures a smooth and stress-free experience.
            </p>
            <p>
              We offer door-to-door pickup and delivery, professional packing services, loading and 
              unloading assistance, and secure storage solutions. All moves are fully insured with 
              coverage up to ₹5 lakhs, giving you complete peace of mind.
            </p>
          </div>

          {/* Coverage Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-orange mb-1">50+</div>
              <div className="font-body text-sm text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-orange mb-1">28</div>
              <div className="font-body text-sm text-gray-600">States Served</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-orange mb-1">500+</div>
              <div className="font-body text-sm text-gray-600">Locations</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-orange mb-1">100%</div>
              <div className="font-body text-sm text-gray-600">Coverage</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="font-body text-lg text-gray-600 mb-4">
            Don't see your location? We're always expanding our services.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us for Your Area
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
