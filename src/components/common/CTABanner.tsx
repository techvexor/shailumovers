import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-navy via-[#1e3a5f] to-brand-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 mb-8">
            Get a free, no-obligation quote in minutes. Our team is standing by
            to help you plan the perfect move.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-14 px-8 text-base shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 group rounded-full"
              onClick={() => (window.location.href = "/get-quote")}
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-brand-navy font-semibold h-14 px-8 text-base transition-all duration-300 rounded-full backdrop-blur-sm"
              onClick={() => (window.location.href = "tel:+917011638761")}
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
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
