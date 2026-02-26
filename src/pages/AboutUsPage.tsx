import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import {
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Clock,
  Heart,
  Star,
  CheckCircle,
} from "lucide-react";

const teamValues = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "No hidden charges, no surprises. We believe in honest communication and transparent pricing.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description:
      "Every decision we make is focused on delivering the best experience for our customers.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, every time. Our 99% on-time rate speaks for our commitment.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We constantly improve our processes, training, and equipment to deliver premium service.",
  },
];

const milestones = [
  {
    year: "2008",
    title: "Founded",
    description:
      "Shailu Movers started with a single truck and a dream to make moving stress-free.",
  },
  {
    year: "2012",
    title: "100 Moves",
    description:
      "Reached our first milestone of 100 successful household relocations.",
  },
  {
    year: "2016",
    title: "Fleet Expansion",
    description:
      "Expanded our fleet to 10+ vehicles and added office relocation services.",
  },
  {
    year: "2019",
    title: "ISO Certified",
    description:
      "Achieved ISO 9001 certification for quality management in moving services.",
  },
  {
    year: "2022",
    title: "500+ Happy Customers",
    description:
      "Crossed 500 successful moves with a 4.9/5 average customer rating.",
  },
  {
    year: "2024",
    title: "Pan-India Expansion",
    description:
      "Expanded services to cover major cities across India with a team of 25+ professionals.",
  },
];

const AboutUsPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="About Shailu Movers"
        subtitle="From a single truck to a full-service moving company. Discover our story of trust, dedication, and countless successful moves."
        breadcrumb="About Us"
        image="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=80"
        showCTA={false}
      />

      {/* Our Story */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80"
                alt="Moving team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border-2 border-brand-orange/20">
                <div className="font-display text-4xl font-bold text-brand-orange">
                  15+
                </div>
                <div className="font-body text-sm text-gray-600">
                  Years of Excellence
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-brand-orange/10 text-brand-orange font-semibold px-4 py-2 rounded-full text-sm mb-4">
                OUR STORY
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Trusted Moving Partners Since 2008
              </h2>
              <div className="space-y-4 font-body text-lg text-gray-600 leading-relaxed">
                <p>
                  What started as a small family business with a single truck
                  has grown into one of the most trusted moving companies in the
                  Delhi NCR region. Our founder, Shailu, started this business
                  with a simple mission: to make moving stress-free for
                  everyone.
                </p>
                <p>
                  Today, we're proud to have helped over 500 families and
                  businesses relocate safely and efficiently. Our team of 25+
                  trained professionals treats every move with the same care and
                  attention we'd give our own belongings.
                </p>
                <p>
                  We believe moving is more than just transporting items from
                  point A to point B. It's about helping people transition to new
                  chapters in their lives with confidence and peace of mind.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">
                      Licensed
                    </div>
                    <div className="text-sm text-gray-600">Govt. Certified</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-orange/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">
                      ISO 9001
                    </div>
                    <div className="text-sm text-gray-600">
                      Quality Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-brand-orange/20 hover:border-brand-orange transition-colors duration-300 shadow-lg">
              <div className="bg-brand-orange w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-brand-navy mb-4">
                Our Mission
              </h3>
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                To provide world-class moving services that prioritize customer
                satisfaction, safety, and affordability. We aim to set new
                standards in the relocation industry through innovation,
                professionalism, and genuine care for our customers' needs.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-brand-teal/20 hover:border-brand-teal transition-colors duration-300 shadow-lg">
              <div className="bg-brand-teal w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-brand-navy mb-4">
                Our Vision
              </h3>
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                To be India's most trusted and customer-centric moving company,
                expanding our services across the nation while maintaining the
                personal touch and reliability that our customers have come to
                expect from us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-lg text-gray-600">
              These values guide every decision we make and every move we
              execute.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-brand-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-navy to-[#1e3a5f]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="font-body text-lg text-white/70">
              Key milestones that shaped Shailu Movers into who we are today.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors group"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-brand-orange flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-white">
                      {milestone.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-white/70">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              { icon: Users, stat: "25+", label: "Team Members" },
              { icon: Star, stat: "4.9/5", label: "Customer Rating" },
              { icon: CheckCircle, stat: "500+", label: "Moves Completed" },
              { icon: Clock, stat: "15+", label: "Years Experience" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group">
                  <Icon className="w-8 h-8 text-brand-orange mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-3xl font-bold text-brand-navy mb-1">
                    {item.stat}
                  </div>
                  <div className="font-body text-sm text-gray-600">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
};

export default AboutUsPage;
