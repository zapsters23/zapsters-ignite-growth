import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Users, Sparkles, Cpu } from "lucide-react";

const HeroModern = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Blurs */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-200/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-pink-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="container relative pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-black/10 bg-indigo-50 animate-fade-in">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span className="text-xl font-light text-black">Premium Tech Solutions</span>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-black">
                Build The Future
                <br />
                With <span className="text-indigo-600">Zapsters</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed max-w-2xl">
                Elite web development, cutting-edge AI/ML solutions, stunning UI/UX design, and world-class internship programs that launch tech careers.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 text-lg px-8 py-6 h-auto group">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-black/20 text-black hover:bg-black/5 text-lg px-8 py-6 h-auto">
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
                <div className="rounded-2xl border border-black/10 bg-white px-6 py-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-indigo-500" />
                    <div>
                      <div className="font-semibold text-black">99+ Lighthouse</div>
                      <div className="text-xs text-black/60">Performance Score</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 animate-bounce" style={{ animationDelay: "2s", animationDuration: "6s" }}>
                <div className="rounded-2xl border border-black/10 bg-white px-6 py-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="font-semibold text-black">Premium Design</div>
                      <div className="text-xs text-black/60">Award Winning</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-96 h-96 mx-auto relative">
                <div className="w-full h-full rounded-3xl border border-black/10 bg-white overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-32 h-32 text-indigo-400" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-black font-semibold text-lg">Tech Innovation</div>
                    <div className="text-black/60 text-sm">Powered by AI</div>
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
