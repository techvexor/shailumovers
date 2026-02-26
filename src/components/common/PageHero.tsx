import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  image: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaAction?: () => void;
}

const PageHero = ({
  title,
  subtitle,
  breadcrumb,
  image,
  showCTA = true,
  ctaText = "Get Free Quote",
  ctaAction,
}: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <a
              href="/"
              className="font-body text-sm text-white/70 hover:text-brand-orange transition-colors"
            >
              Home
            </a>
            <span className="text-white/40">/</span>
            <span className="font-body text-sm text-brand-orange">
              {breadcrumb}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            {subtitle}
          </p>

          {/* CTA */}
          {showCTA && (
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-14 px-8 text-base shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 group rounded-full"
              onClick={
                ctaAction ||
                (() =>
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ behavior: "smooth" }))
              }
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
