import { useState, useEffect } from "react";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const equipmentCards = [
    {
      title: "Modern Fleet",
      description: "10+ GPS-tracked trucks of various sizes to handle any move.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
      alt: "Moving trucks"
    },
    {
      title: "Quality Materials",
      description: "Premium packing supplies to protect your valuables.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      alt: "Packing materials"
    },
    {
      title: "Safety Equipment",
      description: "Professional tools for safe loading and handling.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
      alt: "Professional tools"
    },
    {
      title: "Climate Control",
      description: "Temperature-controlled storage units for sensitive items.",
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80",
      alt: "Climate control storage"
    },
    {
      title: "Insurance Coverage",
      description: "Full coverage insurance on all items during transit.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      alt: "Insurance coverage"
    },
    {
      title: "Heavy Equipment",
      description: "Specialized equipment for handling heavy and fragile items.",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      alt: "Heavy equipment"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % equipmentCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [equipmentCards.length]);

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80"
                alt="Professional moving team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 bg-brand-orange w-32 h-32 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-8 -left-8 bg-brand-teal w-24 h-24 rounded-full opacity-10 -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-brand-orange/10 text-brand-orange font-semibold px-4 py-2 rounded-full text-sm mb-6">
              OUR STORY
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Trusted Moving Partners Since 2008
            </h2>
            <div className="space-y-4 font-body text-lg text-gray-600 leading-relaxed">
              <p>
                What started as a small family business with a single truck has grown into 
                one of the most trusted moving companies in Maharashtra. Our founder, Shailu, 
                started this business with a simple mission: to make moving stress-free for everyone.
              </p>
              <p>
                Today, we're proud to have helped over 2,800 families and businesses relocate 
                safely and efficiently. Our team of 25+ trained professionals treats every move 
                with the same care and attention we'd give our own belongings.
              </p>
              <p>
                We believe moving is more than just transporting items from point A to point B. 
                It's about helping people transition to new chapters in their lives with confidence 
                and peace of mind.
              </p>
            </div>

            {/* Awards/Certifications */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">Licensed</div>
                  <div className="text-sm text-gray-600">Govt. Certified</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-orange/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">ISO 9001</div>
                  <div className="text-sm text-gray-600">Quality Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 lg:p-12 border-2 border-brand-orange/20 hover:border-brand-orange transition-colors duration-300">
            <div className="bg-brand-orange w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-3xl font-bold text-brand-navy mb-4">
              Our Mission
            </h3>
            <p className="font-body text-lg text-gray-700 leading-relaxed">
              To provide world-class moving services that prioritize customer satisfaction, 
              safety, and affordability. We aim to set new standards in the relocation industry 
              through innovation, professionalism, and genuine care for our customers' needs.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 lg:p-12 border-2 border-brand-teal/20 hover:border-brand-teal transition-colors duration-300">
            <div className="bg-brand-teal w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-3xl font-bold text-brand-navy mb-4">
              Our Vision
            </h3>
            <p className="font-body text-lg text-gray-700 leading-relaxed">
              To be India's most trusted and customer-centric moving company, expanding our 
              services across the nation while maintaining the personal touch and reliability 
              that our customers have come to expect from us.
            </p>
          </div>
        </div>

        {/* Equipment Showcase */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl font-bold text-brand-navy mb-4">
              Our Fleet & Equipment
            </h3>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Modern, well-maintained vehicles and professional equipment ensure 
              safe transportation of your belongings.
            </p>
          </div>

          <div className="relative">
            {/* Main carousel container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {equipmentCards.map((card, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6 bg-white">
                        <h4 className="font-display text-xl font-bold text-brand-navy mb-2">
                          {card.title}
                        </h4>
                        <p className="font-body text-gray-600">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + equipmentCards.length) % equipmentCards.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 bg-brand-navy text-white p-2 md:p-3 rounded-full hover:bg-brand-navy/80 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % equipmentCards.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 bg-brand-navy text-white p-2 md:p-3 rounded-full hover:bg-brand-navy/80 transition-colors"
            >
              →
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {equipmentCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-brand-navy"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
