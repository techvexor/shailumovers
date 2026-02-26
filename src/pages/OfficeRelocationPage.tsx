import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import CTABanner from "@/components/common/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Monitor,
  Server,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  FileText,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Minimal Downtime",
    description:
      "We plan and execute moves to minimize business disruption. Weekend and after-hours moves available.",
  },
  {
    icon: Monitor,
    title: "IT Equipment Handling",
    description:
      "Specialized handling of computers, servers, and sensitive electronic equipment with anti-static materials.",
  },
  {
    icon: Server,
    title: "Server Room Relocation",
    description:
      "Expert team for safe disassembly, transport, and reassembly of server racks and networking equipment.",
  },
  {
    icon: FileText,
    title: "Asset Inventory",
    description:
      "Complete documentation and labeling of all office assets for organized and accountable relocation.",
  },
  {
    icon: Shield,
    title: "Corporate Insurance",
    description:
      "Enhanced insurance coverage for high-value office equipment and confidential documents.",
  },
  {
    icon: Users,
    title: "Dedicated Project Manager",
    description:
      "A single point of contact oversees your entire move from planning to completion.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Site Assessment",
    description:
      "Our team visits both locations, creates floor plans, and develops a detailed move strategy.",
  },
  {
    icon: Zap,
    title: "Move Planning",
    description:
      "Custom timeline, department-wise scheduling, and resource allocation for zero disruption.",
  },
  {
    icon: Building2,
    title: "Execute & Verify",
    description:
      "Systematic move execution with real-time tracking. Post-move verification ensures nothing is missed.",
  },
];

const OfficeRelocationPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Office Relocation Services"
        subtitle="Professional office moving with minimal downtime. We handle IT equipment, furniture, and documents with expert care."
        breadcrumb="Office Relocation"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
      />

      {/* Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-50 text-brand-teal font-semibold px-4 py-2 rounded-full text-sm mb-4">
                CORPORATE MOVING
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Seamless Office Transitions
              </h2>
              <p className="font-body text-lg text-gray-600 mb-4 leading-relaxed">
                Relocating an office is more than moving furniture. It requires
                meticulous planning, specialized handling of sensitive equipment,
                and coordination to ensure business continuity.
              </p>
              <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                Our dedicated corporate moving team has relocated 100+ offices
                across Delhi NCR, from small startups to large enterprises. We
                understand the urgency and handle every detail.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "100+ offices relocated",
                  "Weekend moves available",
                  "IT equipment experts",
                  "Zero data loss guarantee",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                    <span className="font-body text-sm text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
                alt="Modern office"
                className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-teal text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display text-3xl font-bold">100+</div>
                <div className="font-body text-sm opacity-90">
                  Offices Relocated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Choose Us for Office Relocation
            </h2>
            <p className="font-body text-lg text-gray-600">
              Specialized corporate moving expertise that keeps your business
              running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-brand-teal/50"
                >
                  <CardContent className="p-6">
                    <div className="bg-brand-teal/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-brand-teal group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our 3-Step Corporate Move Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-teal to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-brand-navy text-white font-display font-bold flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-600">{step.description}</p>
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

export default OfficeRelocationPage;
