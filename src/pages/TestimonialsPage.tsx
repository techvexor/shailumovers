import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Noida, Sector 101",
    rating: 5,
    text: "Exceptional service from start to finish! The team was professional, careful with our belongings, and completed the move ahead of schedule. Highly recommend Shailu Movers for anyone planning a home shift.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    service: "Home Shifting",
  },
  {
    name: "Rajesh Kumar",
    location: "Greater Noida",
    rating: 5,
    text: "I've moved offices three times, and this was by far the smoothest experience. They handled all our equipment with extreme care and had us operational within a day. Worth every rupee!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    service: "Office Relocation",
  },
  {
    name: "Anjali Patel",
    location: "Delhi, South Extension",
    rating: 5,
    text: "Moving with kids is stressful, but Shailu Movers made it so easy. They were patient, organized, and even helped us unpack. Our furniture arrived without a scratch. Thank you!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    service: "Home Shifting",
  },
  {
    name: "Vikram Singh",
    location: "Gurgaon, DLF Phase 3",
    rating: 5,
    text: "Affordable rates without compromising quality. The packing was meticulous, and they provided insurance for peace of mind. Will definitely use their services again for my next move.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    service: "Packing Services",
  },
  {
    name: "Meera Nair",
    location: "Noida, Sector 62",
    rating: 5,
    text: "24/7 customer support is not just a claim—they actually answered my late-night queries! The move went exactly as planned. Professional team that truly cares about customer satisfaction.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    service: "Home Shifting",
  },
  {
    name: "Amit Verma",
    location: "Faridabad",
    rating: 5,
    text: "The storage facility was clean, secure, and well-maintained. My furniture stayed there for 2 months during renovation and came back in perfect condition. Excellent service!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    service: "Storage Solutions",
  },
  {
    name: "Sunita Desai",
    location: "Ghaziabad, Indirapuram",
    rating: 5,
    text: "Used their loading and unloading service for a local shift. The team was punctual, efficient, and handled heavy furniture with ease. Very reasonable pricing too!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    service: "Loading & Unloading",
  },
  {
    name: "Rohit Mehta",
    location: "Delhi NCR",
    rating: 5,
    text: "Booked their transport service for moving some goods from Delhi to Noida. Driver was on time, vehicle was clean, and everything arrived safely. GPS tracking was a nice touch!",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
    service: "Local Transport",
  },
];

const TestimonialsPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Customer Testimonials"
        subtitle="Don't just take our word for it — hear from hundreds of families and businesses who trusted us with their moves."
        breadcrumb="Testimonials"
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
        showCTA={false}
      />

      {/* Stats */}
      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                4.9/5
              </div>
              <div className="font-body text-sm text-gray-600">
                Average Rating
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                500+
              </div>
              <div className="font-body text-sm text-gray-600">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                98%
              </div>
              <div className="font-body text-sm text-gray-600">
                Satisfaction Rate
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                450+
              </div>
              <div className="font-body text-sm text-gray-600">
                5-Star Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-orange/30"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-brand-orange/20 mb-3" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-brand-orange text-brand-orange"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-body text-gray-700 leading-relaxed mb-5 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-brand-orange/20"
                      />
                      <div>
                        <div className="font-display text-sm font-bold text-brand-navy">
                          {testimonial.name}
                        </div>
                        <div className="font-body text-xs text-gray-500">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-brand-orange text-brand-orange"
                />
              ))}
            </div>
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-3">
              Loved Our Service?
            </h2>
            <p className="font-body text-lg text-gray-600 mb-6">
              We'd love to hear your experience! Your review helps other families
              find reliable moving services.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-lg"
              onClick={() =>
                window.open("https://g.page/review/shailumovers", "_blank")
              }
            >
              <Star className="w-5 h-5" />
              Leave a Google Review
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
};

export default TestimonialsPage;
