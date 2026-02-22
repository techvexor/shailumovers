import { Home, Building2, Package, Truck, Users, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Home Shifting",
    description: "Complete household relocation with careful packing and safe transport of all belongings.",
    color: "bg-orange-50 text-brand-orange",
  },
  {
    icon: Building2,
    title: "Office Relocation",
    description: "Professional office moving services with minimal downtime for your business.",
    color: "bg-blue-50 text-brand-teal",
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Expert packing with quality materials to ensure the safety of your items.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Truck,
    title: "Local Transport",
    description: "Reliable local delivery and transport services for goods of all sizes.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    title: "Loading & Unloading",
    description: "Professional team for safe loading, transport, and unloading of your items.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Shield,
    title: "Storage Solutions",
    description: "Secure temporary storage facilities for your belongings during transition.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Our Moving Services
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            From home shifting to office relocation, we provide comprehensive moving solutions 
            tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-gray-100 hover:border-brand-orange"
              >
                <CardContent className="p-6">
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center text-brand-orange font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="font-body text-lg text-gray-600 mb-4">
            Don't see what you're looking for? We offer customized solutions.
          </p>
          <button
            className="inline-flex items-center font-body font-semibold text-brand-navy hover:text-brand-orange text-lg border-b-2 border-brand-navy hover:border-brand-orange transition-colors pb-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact us for custom requirements
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
