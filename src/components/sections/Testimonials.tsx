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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-brand-navy via-[#1e3a5f] to-brand-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-200">
            Don't just take our word for it—hear from families and businesses who trusted us with their moves.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              {/* Quote Icon */}
              <Quote className="w-16 h-16 text-brand-orange/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-body text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-brand-orange/20"
                />
                <div>
                  <div className="font-display text-xl font-bold text-brand-navy">
                    {currentTestimonial.name}
                  </div>
                  <div className="font-body text-gray-600">
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
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
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
