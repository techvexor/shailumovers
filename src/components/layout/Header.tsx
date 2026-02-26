import { useState } from "react";
import { Menu, Phone, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const serviceLinks = [
    { name: "Home Shifting", href: "/home-shifting" },
    { name: "Office Relocation", href: "/office-relocation" },
    { name: "Packing Services", href: "/packing-services" },
    { name: "Local Transport", href: "/local-transport" },
    { name: "Loading & Unloading", href: "/loading-unloading" },
    { name: "Storage Solutions", href: "/storage-solutions" },
  ];

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-3xl font-display font-bold text-brand-navy">
                  Shailu Movers
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="/"
                className="text-sm font-body font-medium text-brand-charcoal hover:text-brand-orange transition-colors duration-200"
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="flex items-center gap-1 text-sm font-body font-medium text-brand-charcoal hover:text-brand-orange transition-colors duration-200">
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-up">
                    <a
                      href="/services"
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-body font-semibold text-brand-navy hover:bg-brand-cream hover:text-brand-orange transition-colors border-b border-gray-100"
                    >
                      All Services
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {serviceLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm font-body text-brand-charcoal hover:bg-brand-cream hover:text-brand-orange transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-body font-medium text-brand-charcoal hover:text-brand-orange transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold h-10 px-4"
                onClick={() => (window.location.href = "tel:+917011638761")}
              >
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </Button>
              <Button
                size="sm"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-10 px-4"
                onClick={() => (window.location.href = "/get-quote")}
              >
                Get Quote
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-12 w-12"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-brand-navy" />
                ) : (
                  <Menu className="h-6 w-6 text-brand-navy" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 space-y-1">
              <a
                href="/"
                className="block text-base font-body font-medium text-brand-charcoal hover:text-brand-orange py-3 px-3 rounded-lg hover:bg-brand-cream transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>

              {/* Mobile Services */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-base font-body font-medium text-brand-charcoal hover:text-brand-orange py-3 px-3 rounded-lg hover:bg-brand-cream transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <a
                      href="/services"
                      className="block text-sm font-body font-semibold text-brand-navy py-2.5 px-3 rounded-lg hover:bg-brand-cream hover:text-brand-orange transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Services →
                    </a>
                    {serviceLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block text-sm font-body text-brand-charcoal py-2.5 px-3 rounded-lg hover:bg-brand-cream hover:text-brand-orange transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-body font-medium text-brand-charcoal hover:text-brand-orange py-3 px-3 rounded-lg hover:bg-brand-cream transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="w-full border-2 border-brand-navy text-black hover:bg-brand-navy hover:text-white font-semibold h-14"
                  onClick={() => (window.location.href = "tel:+917011638761")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-14"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = "/get-quote";
                  }}
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 gap-2 p-3">
          <Button
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold h-12"
            onClick={() =>
              window.open(
                "https://wa.me/917011638761?text=Hi,%20I%20need%20help%20with%20moving%20services",
                "_blank"
              )
            }
          >
            <svg
              className="w-5 h-5 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </Button>
          <Button
            variant="outline"
            className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold h-12"
            onClick={() => (window.location.href = "tel:+917011638761")}
          >
            <Phone className="w-5 h-5 mr-1" />
            Call
          </Button>
          <Button
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-12"
            onClick={() => (window.location.href = "/get-quote")}
          >
            Quote
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
