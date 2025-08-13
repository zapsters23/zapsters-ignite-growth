import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroTechImage from "@/assets/hero-tech-workspace.jpg";
import { ArrowRight, Code, Zap, Users } from "lucide-react";

const HeroModern = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroTechImage}
          alt="Zapsters tech workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 aurora opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px circle at 20% 20%, hsl(var(--brand-1) / 0.15), transparent 50%), radial-gradient(800px circle at 80% 60%, hsl(var(--brand-2) / 0.15), transparent 50%)",
          }}
        />
      </div>

      <div className="container relative pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border glass slide-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Premium Tech Solutions</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6 slide-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                  Build The
                </span>
                <br />
                <span className="text-foreground">Future</span>
                <br />
                <span className="text-foreground font-light">With</span>{" "}
                <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                  Zapsters
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Elite web development, cutting-edge AI/ML solutions, stunning UI/UX design, and world-class internship programs that launch tech careers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" variant="hero" className="text-lg px-8 py-6 h-auto button-glow group">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto glass hover-lift">
                <Link to="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">16+</div>
                <div className="text-sm text-muted-foreground">Tech Domains</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative space-y-6">
              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 float-animation">
                <div className="rounded-2xl border glass px-6 py-4 bg-background/90 shadow-[var(--shadow-elegant)]">
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">99+ Lighthouse</div>
                      <div className="text-xs text-muted-foreground">Performance Score</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 float-animation" style={{ animationDelay: "-2s" }}>
                <div className="rounded-2xl border glass px-6 py-4 bg-background/90 shadow-[var(--shadow-elegant)]">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">Premium Design</div>
                      <div className="text-xs text-muted-foreground">Award Winning</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Tech Element */}
              <div className="w-96 h-96 mx-auto relative">
                <div className="w-full h-full rounded-3xl border glass overflow-hidden pulse-glow">
                  <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-black text-primary opacity-50">Z</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroModern;