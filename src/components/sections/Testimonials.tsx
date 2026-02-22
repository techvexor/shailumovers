import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Exceptional service from start to finish! The team was professional, careful with our belongings, and completed the move ahead of schedule. Highly recommend Shailu Movers for anyone planning a home shift.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "I've moved offices three times, and this was by far the smoothest experience. They handled all our equipment with extreme care and had us operational within a day. Worth every rupee!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Anjali Patel",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "Moving with kids is stressful, but Shailu Movers made it so easy. They were patient, organized, and even helped us unpack. Our furniture arrived without a scratch. Thank you!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    name: "Vikram Singh",
    location: "Delhi NCR",
    rating: 5,
    text: "Affordable rates without compromising quality. The packing was meticulous, and they provided insurance for peace of mind. Will definitely use their services again for my next move.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    name: "Meera Nair",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "24/7 customer support is not just a claim—they actually answered my late-night queries! The move went exactly as planned. Professional team that truly cares about customer satisfaction.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-200">
            Don't just take our word for it—hear from families and businesses who trusted us with their moves.
          </p>
        </div>

        {/* Main Testimonial Card - Smaller */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl">
            <CardContent className="p-6 lg:p-8">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-brand-orange/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{currentTestimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange/20"
                />
                <div>
                  <div className="font-display text-base font-bold text-brand-navy">
                    {currentTestimonial.name}
                  </div>
                  <div className="font-body text-sm text-gray-600">
                    {currentTestimonial.location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-brand-navy transition-all duration-300"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-brand-orange w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-brand-navy transition-all duration-300"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Stats Below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-brand-orange mb-2">4.9/5</div>
            <div className="font-body text-white/80">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-brand-orange mb-2">500+</div>
            <div className="font-body text-white/80">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-brand-orange mb-2">98%</div>
            <div className="font-body text-white/80">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-brand-orange mb-2">450+</div>
            <div className="font-body text-white/80">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
