import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Zap, Users, Sparkles, Cpu } from "lucide-react";

const HeroModern = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
      {/* Purple Blurry Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-pink-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="container relative pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl animate-fade-in">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-white">Premium Tech Solutions</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Build The
                </span>
                <br />
                <span className="text-white">Future</span>
                <br />
                <span className="text-white/80 font-light">With</span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zapsters
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
                Elite web development, cutting-edge AI/ML solutions, stunning UI/UX design, and world-class internship programs that launch tech careers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" variant="hero" className="text-lg px-8 py-6 h-auto group">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass" className="text-lg px-8 py-6 h-auto">
                <Link to="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400">100+</div>
                <div className="text-sm text-white/60">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">16+</div>
                <div className="text-sm text-white/60">Tech Domains</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative space-y-6">
              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 animate-bounce" style={{ animationDuration: "6s" }}>
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-violet-400" />
                    <div>
                      <div className="font-semibold text-white">99+ Lighthouse</div>
                      <div className="text-xs text-white/60">Performance Score</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 animate-bounce" style={{ animationDelay: "2s", animationDuration: "6s" }}>
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold text-white">Premium Design</div>
                      <div className="text-xs text-white/60">Award Winning</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Tech Element */}
              <div className="w-96 h-96 mx-auto relative">
                <div className="w-full h-full rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl shadow-violet-500/25 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-32 h-32 text-violet-400/50" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white/80 font-semibold text-lg">Tech Innovation</div>
                    <div className="text-white/60 text-sm">Powered by AI</div>
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