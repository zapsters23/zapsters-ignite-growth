import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Users, Sparkles, Cpu } from "lucide-react";
import laptopGif from "@/assets/laptop.gif";

const HeroModern = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-900/20 to-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-indigo-900/15 to-purple-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-violet-900/15 to-indigo-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-gradient-to-r from-purple-900/10 to-indigo-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 2px, transparent 0)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="container relative pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 text-center lg:text-left">

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white">
                Build The Future
                <br />
                With <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">Zapsters</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
                Elite web development, cutting-edge AI/ML solutions, stunning UI/UX design, and world-class internship programs that launch tech careers.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 text-xl px-10 py-7 h-auto group rounded-2xl shadow-xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 text-xl px-10 py-7 h-auto rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                <Link to="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">10+</div>
                <div className="text-sm text-white/60">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">200+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400">16+</div>
                <div className="text-sm text-white/60">Tech Domains</div>
              </div>
            </div>
          </div>

          {/* Visual - GIF Placeholder */}
          <div className="relative lg:block hidden">
            <div className="relative space-y-6">
              <div className="w-[500px] h-[350px] mx-auto relative">
                <div className="w-full h-full rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-black/40 via-purple-900/20 to-indigo-800/30 backdrop-blur-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/70 text-center">
                      <div className="w-full h-full flex items-center justify-center">
                        <img src={laptopGif} alt="Laptop Animation" className="w-full h-full object-contain" />
                      </div>
                    </div>
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
