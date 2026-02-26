import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 7011638761"],
    subtitle: "Mon-Sun, 24/7",
    action: () => (window.location.href = "tel:+917011638761"),
    color: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@shailumovers.com"],
    subtitle: "We reply within 1 hour",
    action: () => (window.location.href = "mailto:info@shailumovers.com"),
    color: "bg-brand-teal/10 text-brand-teal",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Sector 101, Noida", "Uttar Pradesh, India"],
    subtitle: "Visit us anytime",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Sunday", "24 Hours / 7 Days"],
    subtitle: "Always available",
    color: "bg-green-50 text-green-600",
  },
];

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or need a quote? Reach out to us anytime. We're here to help make your move stress-free."
        breadcrumb="Contact Us"
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
        showCTA={false}
      />

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={item.action}
                  className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-orange/30 text-center ${item.action ? "cursor-pointer hover:-translate-y-1" : ""}`}
                >
                  <div
                    className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, i) => (
                    <div key={i} className="font-body text-sm text-gray-700">
                      {detail}
                    </div>
                  ))}
                  <div className="font-body text-xs text-gray-400 mt-2">
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 1 hour.
              </p>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-body text-gray-600">
                    We'll get back to you within 1 hour. For urgent queries, call
                    us directly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-brand-navy font-semibold"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="h-12 border-2 focus:border-brand-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-brand-navy font-semibold"
                      >
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="h-12 border-2 focus:border-brand-orange"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-brand-navy font-semibold"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="h-12 border-2 focus:border-brand-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-brand-navy font-semibold"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="h-12 border-2 focus:border-brand-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-brand-navy font-semibold"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="min-h-32 border-2 focus:border-brand-orange resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Right side - Quick Actions */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-[#25D366]/10 rounded-2xl p-6 lg:p-8 border-2 border-[#25D366]/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#25D366] w-14 h-14 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-navy">
                      Chat on WhatsApp
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      Instant replies, 24/7
                    </p>
                  </div>
                </div>
                <p className="font-body text-gray-600 mb-4">
                  For the fastest response, message us on WhatsApp. Get instant
                  quotes, ask questions, or book your move right away.
                </p>
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold h-12"
                  onClick={() =>
                    window.open(
                      "https://wa.me/917011638761?text=Hi,%20I%20need%20help%20with%20moving%20services",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </div>

              {/* Call Card */}
              <div className="bg-brand-orange/10 rounded-2xl p-6 lg:p-8 border-2 border-brand-orange/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-orange w-14 h-14 rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-navy">
                      Call Us Directly
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      24/7 available
                    </p>
                  </div>
                </div>
                <p className="font-body text-gray-600 mb-4">
                  Prefer to talk? Call our team anytime for instant assistance
                  with booking, quotes, or any questions.
                </p>
                <Button
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-12"
                  onClick={() => (window.location.href = "tel:+917011638761")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 7011638761
                </Button>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h3 className="font-display text-lg font-bold text-brand-navy mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, color: "bg-blue-600" },
                    { icon: Instagram, color: "bg-gradient-to-br from-purple-600 to-pink-500" },
                    { icon: Twitter, color: "bg-sky-500" },
                    { icon: Linkedin, color: "bg-blue-700" },
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href="#"
                        className={`${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-white hover:opacity-90 hover:scale-110 transition-all duration-200`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="bg-gray-100">
        <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy/5 to-brand-teal/5">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-brand-orange mx-auto mb-3" />
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-1">
              Sector 101, Noida
            </h3>
            <p className="font-body text-gray-600">
              Uttar Pradesh, India — 201301
            </p>
            <a
              href="https://maps.google.com/?q=Sector+101+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-orange font-semibold mt-3 hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUsPage;
