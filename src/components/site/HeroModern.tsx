import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Users, Sparkles, Cpu } from "lucide-react";

const HeroModern = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50/50 to-violet-100/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/40 to-indigo-400/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-indigo-400/35 to-violet-400/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 2px, transparent 0)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="container relative pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 bg-white/20 backdrop-blur-2xl shadow-lg animate-fade-in">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-medium text-black">Premium Tech Solutions</span>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight text-black">
                Build The Future
                <br />
                With <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent">Zapsters</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed max-w-2xl">
                Elite web development, cutting-edge AI/ML solutions, stunning UI/UX design, and world-class internship programs that launch tech careers.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 text-xl px-10 py-7 h-auto group rounded-2xl shadow-xl shadow-purple-500/30 hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/20 backdrop-blur-xl text-black hover:bg-white/30 text-xl px-10 py-7 h-auto rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                <Link to="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">100+</div>
                <div className="text-sm text-black/60">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-black/10"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-black/60">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-black/10"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">16+</div>
                <div className="text-sm text-black/60">Tech Domains</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:block hidden">
            <div className="relative space-y-6">
              <div className="absolute -top-8 -right-8 animate-bounce" style={{ animationDuration: "6s" }}>
                <div className="rounded-3xl border border-white/30 bg-white/20 backdrop-blur-2xl px-8 py-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Code className="w-8 h-8 text-purple-500" />
                    <div>
                      <div className="font-bold text-black text-lg">99+ Lighthouse</div>
                      <div className="text-sm text-black/60">Performance Score</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 animate-bounce" style={{ animationDelay: "2s", animationDuration: "6s" }}>
                <div className="rounded-3xl border border-white/30 bg-white/20 backdrop-blur-2xl px-8 py-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-indigo-500" />
                    <div>
                      <div className="font-bold text-black text-lg">Premium Design</div>
                      <div className="text-sm text-black/60">Award Winning</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-96 h-96 mx-auto relative">
                <div className="w-full h-full rounded-3xl border border-white/30 bg-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-40 h-40 text-purple-400/60" />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-black font-bold text-xl">Tech Innovation</div>
                    <div className="text-black/60 text-lg">Powered by AI</div>
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
