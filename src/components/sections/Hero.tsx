import { useState, useEffect, useCallback } from "react";
import { Phone, MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80",
    location: "Noida",
    tagline: "Seamless Moves Across Noida",
  },
  {
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    location: "Delhi",
    tagline: "Trusted Movers in Delhi NCR",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    location: "Noida Extension",
    tagline: "Safe & Swift Relocations",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    location: "Greater Noida",
    tagline: "Your Move, Our Mission",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    location: "South Delhi",
    tagline: "Premium Moving Experience",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTextKey((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? "scale(1)" : "scale(1.08)",
          }}
        >
          <img
            src={slide.image}
            alt={slide.location}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Location Badge */}
            <div
              key={`badge-${textKey}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 animate-fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-body text-sm text-white/90 tracking-wide uppercase">
                Serving {slides[currentSlide].location}
              </span>
            </div>

            {/* Headline */}
            <h1
              key={`title-${textKey}`}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] animate-fade-up animation-delay-200"
            >
              {slides[currentSlide].tagline}
            </h1>

            {/* Subtext - Minimal */}
            <p className="font-body text-lg md:text-xl text-white/80 max-w-xl">
              Professional packers & movers — fast, safe, affordable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-14 px-8 text-base shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 group rounded-full"
                onClick={() =>
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-brand-navy font-semibold h-14 px-8 text-base transition-all duration-300 rounded-full backdrop-blur-sm"
                onClick={() =>
                  (window.location.href = "tel:+917011638761")
                }
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold h-14 px-8 text-base transition-all duration-300 hover:scale-105 rounded-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/917011638761?text=Hi,%20I%20need%20help%20with%20moving%20services",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>

            {/* Trust Row */}
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-orange">500+</div>
                <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                  Happy Moves
                </div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-orange">24/7</div>
                <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                  Support
                </div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-orange">100%</div>
                <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                  Insured
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators (bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group flex flex-col items-center gap-1.5"
            aria-label={`Go to ${slide.location}`}
          >
            <span
              className={`font-body text-[10px] uppercase tracking-widest transition-all duration-300 ${
                currentSlide === index
                  ? "text-white opacity-100"
                  : "text-white/0 opacity-0 group-hover:text-white/70 group-hover:opacity-100"
              }`}
            >
              {slide.location}
            </span>
            <span
              className={`block rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-10 h-1 bg-brand-orange"
                  : "w-3 h-1 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="font-body text-[10px] text-white/40 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
