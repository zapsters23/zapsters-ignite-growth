import { Button } from "@/components/ui/button";
import GradientSpotlight from "./GradientSpotlight";
import heroImage from "@/assets/hero-zapsters.jpg";
import { Link } from "react-router-dom";

const HeroExpensive = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-12 md:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-70" />
        <div className="absolute inset-0 aurora opacity-80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px circle at 10% -10%, hsl(var(--brand-2) / 0.25), transparent 40%), radial-gradient(800px circle at 90% 10%, hsl(var(--brand-1) / 0.25), transparent 40%)",
          }}
        />
      </div>
      <GradientSpotlight />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-[var(--gradient-primary)] bg-clip-text text-transparent animate-enter">
              Build premium experiences that feel effortless
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground animate-fade-in">
              Zapsters crafts elite web platforms, stunning UI/UX, and empowers talent through real-world internships.
            </p>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Start a project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">View projects</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl border glass overflow-hidden shadow-[var(--shadow-glow)] hover-scale">
              <img
                src={heroImage}
                alt="Zapsters premium gradient showcase for web, design and internships"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 mix-blend-overlay" />
            </div>
            <div className="absolute -top-6 -right-6 hidden md:block">
              <div className="rounded-xl border glass px-4 py-2 text-sm shadow-[var(--shadow-elegant)]">99+ Lighthouse</div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-xl border glass px-4 py-2 text-sm shadow-[var(--shadow-elegant)]">Design Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroExpensive;
