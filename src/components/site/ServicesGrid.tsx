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
  { name: "Java", icon: Code2, description: "Enterprise-grade Java applications" },
  { name: "Python", icon: Code2, description: "AI/ML and backend development" },
  { name: "Full Stack", icon: Globe, description: "End-to-end web solutions" },
  { name: "Web Development", icon: Globe, description: "Modern responsive websites" },
  { name: "UI/UX", icon: Palette, description: "User-centered design systems" },
  { name: "Data Science", icon: BarChart3, description: "Analytics and insights" },
  { name: "AI/ML", icon: Brain, description: "Machine learning solutions" },
  { name: "Data Mining", icon: Search, description: "Extract valuable insights" },
  { name: "Cybersecurity", icon: Shield, description: "Secure digital infrastructure" },
  { name: "Ethical Hacking", icon: Bug, description: "Penetration testing services" },
  { name: "C/C++", icon: Cpu, description: "System-level programming" },
  { name: "Game Development", icon: Gamepad2, description: "Interactive gaming experiences" },
  { name: "3D Modeling", icon: Box, description: "3D visualization and modeling" },
  { name: "CAD Design", icon: Ruler, description: "Computer-aided design" },
  { name: "IoT", icon: Wifi, description: "Internet of Things solutions" },
  { name: "Embedded Designs", icon: Microchip, description: "Hardware-software integration" },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(800px circle at 50% 50%, hsl(var(--brand-1) / 0.1), transparent 70%)"
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
                className="group relative rounded-2xl border glass p-6 hover-scale transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3 group-hover:scale-110 transition-transform">
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