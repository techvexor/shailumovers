import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-navy via-[#1e3a5f] to-brand-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 opacity-0 animate-fade-up">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Stress-Free Move Starts Here
              </h1>
              <p className="font-body text-xl md:text-2xl text-gray-200 max-w-2xl">
                Professional home shifting and local transport services you can trust. 
                Safe handling, on-time delivery, affordable rates.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-400">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-16 px-10 text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 group"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-semibold h-16 px-10 text-lg transition-all duration-300"
                onClick={() => window.location.href = "tel:+917011638761"}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold h-16 px-10 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/917011638761?text=Hi,%20I%20need%20help%20with%20moving%20services', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 opacity-0 animate-fade-up animation-delay-600">
              <div className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-brand-orange mb-1">500+</div>
                <div className="font-body text-sm text-gray-300">Happy Moves</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="font-display text-3xl lg:text-4xl font-bold text-brand-orange mb-1">24/7</div>
                <div className="font-body text-sm text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-brand-orange mb-1">100%</div>
                <div className="font-body text-sm text-gray-300">Insured</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block opacity-0 animate-fade-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80"
                alt="Professional movers in action"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-orange/10 p-4 rounded-lg">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-brand-navy">98%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
