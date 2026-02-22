import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
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

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="font-display text-4xl font-bold text-brand-navy mb-4">
            Meet Our Team
          </h3>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are the backbone of our success. 
            Every team member is trained, background-verified, and committed to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Shailu Kumar", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
            { name: "Priya Sharma", role: "Operations Head", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
            { name: "Rajesh Patel", role: "Fleet Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
            { name: "Anjali Singh", role: "Customer Success", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
          ].map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="font-display text-xl font-bold text-brand-navy mb-1">
                {member.name}
              </h4>
              <p className="font-body text-gray-600">{member.role}</p>
            </div>
          ))}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80"
                alt="Moving trucks"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">
                  Modern Fleet
                </h4>
                <p className="font-body text-gray-600">
                  10+ GPS-tracked trucks of various sizes to handle any move.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
                alt="Packing materials"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">
                  Quality Materials
                </h4>
                <p className="font-body text-gray-600">
                  Premium packing supplies to protect your valuables.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                alt="Professional tools"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">
                  Safety Equipment
                </h4>
                <p className="font-body text-gray-600">
                  Professional tools for safe loading and handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
