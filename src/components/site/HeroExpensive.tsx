import { Button } from "@/components/ui/button";
import GradientSpotlight from "./GradientSpotlight";
import heroImage from "@/assets/hero-zapsters.jpg";
import { Link } from "react-router-dom";

const HeroExpensive = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 aurora opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px circle at 20% -20%, hsl(var(--brand-2) / 0.4), transparent 50%), radial-gradient(1000px circle at 80% 20%, hsl(var(--brand-1) / 0.4), transparent 50%)",
          }}
        />
      </div>
      <GradientSpotlight />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent animate-enter">
                  Premium Tech
                </span>
                <br />
                <span className="text-foreground font-light">that feels</span>
                <br />
                <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                  Effortless
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-in">
                Elite web development, stunning UI/UX design, and world-class internship programs
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto glass">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl border glass overflow-hidden shadow-[var(--shadow-glow)] hover-scale">
              <img
                src={heroImage}
                alt="Zapsters premium tech showcase - web development, UI/UX design and internships"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 mix-blend-overlay" />
            </div>
            <div className="absolute -top-8 -right-8 hidden md:block">
              <div className="rounded-2xl border glass px-6 py-3 text-base font-medium shadow-[var(--shadow-elegant)] bg-background/80">
                99+ Lighthouse
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block">
              <div className="rounded-2xl border glass px-6 py-3 text-base font-medium shadow-[var(--shadow-elegant)] bg-background/80">
                Premium Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroExpensive;
