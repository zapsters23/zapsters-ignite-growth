import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Brush, 
  BarChart3, 
  Brain, 
  Search, 
  Shield, 
  Bug, 
  Cpu, 
  Gamepad2, 
  Box, 
  Ruler, 
  Wifi,
  Microchip
} from "lucide-react";

const services = [
  { name: "Java", icon: Code2, description: "Enterprise-grade Java applications with Spring Boot" },
  { name: "Python", icon: Code2, description: "AI/ML, Django, FastAPI backend development" },
  { name: "Full Stack", icon: Globe, description: "Complete MERN/PERN stack solutions" },
  { name: "Web Development", icon: Globe, description: "React, Next.js, modern responsive websites" },
  { name: "UI/UX Design", icon: Palette, description: "User-centered design systems & prototyping" },
  { name: "Data Science", icon: BarChart3, description: "Advanced analytics and business insights" },
  { name: "AI/ML", icon: Brain, description: "Deep learning, NLP, computer vision solutions" },
  { name: "Data Mining", icon: Search, description: "Big data processing and knowledge extraction" },
  { name: "Cybersecurity", icon: Shield, description: "Secure infrastructure and threat analysis" },
  { name: "Ethical Hacking", icon: Bug, description: "Penetration testing and vulnerability assessment" },
  { name: "C/C++", icon: Cpu, description: "High-performance system programming" },
  { name: "Game Development", icon: Gamepad2, description: "Unity, Unreal Engine gaming experiences" },
  { name: "3D Modeling", icon: Box, description: "Blender, Maya 3D visualization" },
  { name: "CAD Design", icon: Ruler, description: "AutoCAD, SolidWorks engineering design" },
  { name: "IoT Solutions", icon: Wifi, description: "Arduino, Raspberry Pi connected devices" },
  { name: "Embedded Systems", icon: Microchip, description: "Firmware and hardware integration" },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(800px circle at 50% 50%, rgb(139 92 246 / 0.1), transparent 70%)"
          }}
        />
      </div>
      
      <div className="container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            From cutting-edge AI to robust cybersecurity, we deliver premium solutions across every technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group relative rounded-2xl border border-white/20 bg-white/60 dark:border-gray-800/20 dark:bg-gray-900/60 backdrop-blur-xl p-6 hover-lift slide-up transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 p-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;