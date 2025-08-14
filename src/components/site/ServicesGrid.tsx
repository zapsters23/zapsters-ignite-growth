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
    <section id="services" className="py-20 md:py-32 relative bg-white">
      {/* Soft background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>
      
      <div className="container">
        {/* Section title */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black">
            Our <span className="text-indigo-600">Expertise</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto font-light leading-relaxed">
            From cutting-edge AI to robust cybersecurity, we deliver premium solutions across every technology stack
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group relative rounded-2xl border border-black/10 bg-white backdrop-blur-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-200/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-black group-hover:text-indigo-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
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
