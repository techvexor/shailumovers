import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-brand-navy via-[#1e3a5f] to-brand-navy text-white pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-6">
              Shailu Movers
            </h3>
            <p className="font-body text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for stress-free home shifting and transport services. 
              Safe, reliable, and affordable moving solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Home Shifting
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Office Relocation
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Packing Services
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Local Transport
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Loading & Unloading
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Storage Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#areas" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#testimonials" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#quote-form" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Get Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="font-body text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="tel:+917011638761"
                className="flex items-start gap-3 font-body text-gray-300 hover:text-brand-orange transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-mono font-semibold text-lg text-white">+91 7011638761</div>
                  <div className="text-sm">24/7 Customer Support</div>
                </div>
              </a>
              <a
                href="mailto:info@shailumovers.com"
                className="flex items-start gap-3 font-body text-gray-300 hover:text-brand-orange transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white">info@shailumovers.com</div>
                  <div className="text-sm">Email us anytime</div>
                </div>
              </a>
              <div className="flex items-start gap-3 font-body text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white">Sector 101, Noida, UP</div>
                  <div className="text-sm">Services Area: Noida, Greater Noida, Delhi NCR</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={() => window.open('https://wa.me/917011638761?text=Hi,%20I%20need%20help%20with%20moving%20services', '_blank')}
              className="mt-6 w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="font-body text-sm text-gray-300">Licensed & Insured</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-body text-sm text-gray-300">24/7 Support</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="font-body text-sm text-gray-300">5-Star Rated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="font-body text-sm text-gray-300">Secure Payments</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Shailu Movers. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
