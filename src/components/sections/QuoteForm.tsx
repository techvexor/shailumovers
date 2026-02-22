import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    bedrooms: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        movingFrom: "",
        movingTo: "",
        moveDate: "",
        bedrooms: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="quote-form" className="py-24 lg:py-32 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-brand-orange/20">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="font-display text-3xl font-bold text-brand-navy mb-4">
                Thank You!
              </h3>
              <p className="font-body text-lg text-gray-600 mb-6">
                We've received your quote request. Our team will contact you within 30 minutes 
                with a personalized quote and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold h-12 px-6"
                  onClick={() => window.location.href = "tel:+919876543210"}
                >
                  Call Us Now
                </Button>
                <Button
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold h-12 px-6"
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-24 lg:py-32 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Get Your Free Quote
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-600">
              Fill out the form below and receive a personalized quote within 30 minutes. 
              No hidden charges, no obligations.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-brand-navy font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="h-14 border-2 focus:border-brand-orange"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-brand-navy font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-14 border-2 focus:border-brand-orange"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-brand-navy font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="h-14 border-2 focus:border-brand-orange"
                />
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-brand-navy font-semibold">
                  Service Type *
                </Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)} required>
                  <SelectTrigger className="h-14 border-2 focus:border-brand-orange">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home-shifting">Home Shifting</SelectItem>
                    <SelectItem value="office-relocation">Office Relocation</SelectItem>
                    <SelectItem value="packing-services">Packing Services</SelectItem>
                    <SelectItem value="local-transport">Local Transport</SelectItem>
                    <SelectItem value="loading-unloading">Loading & Unloading</SelectItem>
                    <SelectItem value="storage">Storage Solutions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Moving From */}
              <div className="space-y-2">
                <Label htmlFor="movingFrom" className="text-brand-navy font-semibold">
                  Moving From *
                </Label>
                <Input
                  id="movingFrom"
                  required
                  placeholder="Current location"
                  value={formData.movingFrom}
                  onChange={(e) => handleChange("movingFrom", e.target.value)}
                  className="h-14 border-2 focus:border-brand-orange"
                />
              </div>

              {/* Moving To */}
              <div className="space-y-2">
                <Label htmlFor="movingTo" className="text-brand-navy font-semibold">
                  Moving To *
                </Label>
                <Input
                  id="movingTo"
                  required
                  placeholder="Destination"
                  value={formData.movingTo}
                  onChange={(e) => handleChange("movingTo", e.target.value)}
                  className="h-14 border-2 focus:border-brand-orange"
                />
              </div>

              {/* Move Date */}
              <div className="space-y-2">
                <Label htmlFor="moveDate" className="text-brand-navy font-semibold">
                  Preferred Move Date
                </Label>
                <Input
                  id="moveDate"
                  type="date"
                  value={formData.moveDate}
                  onChange={(e) => handleChange("moveDate", e.target.value)}
                  className="h-14 border-2 focus:border-brand-orange"
                />
              </div>

              {/* Bedrooms */}
              <div className="space-y-2">
                <Label htmlFor="bedrooms" className="text-brand-navy font-semibold">
                  Home Size
                </Label>
                <Select value={formData.bedrooms} onValueChange={(value) => handleChange("bedrooms", value)}>
                  <SelectTrigger className="h-14 border-2 focus:border-brand-orange">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1bhk">1 BHK</SelectItem>
                    <SelectItem value="2bhk">2 BHK</SelectItem>
                    <SelectItem value="3bhk">3 BHK</SelectItem>
                    <SelectItem value="4bhk">4 BHK</SelectItem>
                    <SelectItem value="villa">Villa/Bungalow</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="text-brand-navy font-semibold">
                  Additional Details
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your moving requirements..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="min-h-32 border-2 focus:border-brand-orange resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-16 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get My Free Quote
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to receive communications from Shailu Movers
              </p>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            <div>
              <div className="text-brand-teal font-display text-2xl font-bold mb-1">✓</div>
              <div className="text-sm text-gray-600">No Hidden Charges</div>
            </div>
            <div>
              <div className="text-brand-teal font-display text-2xl font-bold mb-1">✓</div>
              <div className="text-sm text-gray-600">Instant Response</div>
            </div>
            <div>
              <div className="text-brand-teal font-display text-2xl font-bold mb-1">✓</div>
              <div className="text-sm text-gray-600">Free Consultation</div>
            </div>
            <div>
              <div className="text-brand-teal font-display text-2xl font-bold mb-1">✓</div>
              <div className="text-sm text-gray-600">Flexible Scheduling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
