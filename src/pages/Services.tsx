import { Helmet } from "react-helmet-async";
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
  { name: "Java", icon: Code2, description: "Enterprise-grade Java applications with Spring Boot", category: "Development" },
  { name: "Python", icon: Code2, description: "AI/ML, Django, FastAPI backend development", category: "Development" },
  { name: "Full Stack", icon: Globe, description: "Complete MERN/PERN stack solutions", category: "Development" },
  { name: "Web Development", icon: Globe, description: "React, Next.js, modern responsive websites", category: "Development" },
  { name: "UI/UX Design", icon: Palette, description: "User-centered design systems & prototyping", category: "Design" },
  { name: "Data Science", icon: BarChart3, description: "Advanced analytics and business insights", category: "Analytics" },
  { name: "AI/ML", icon: Brain, description: "Deep learning, NLP, computer vision solutions", category: "AI/ML" },
  { name: "Data Mining", icon: Search, description: "Big data processing and knowledge extraction", category: "Analytics" },
  { name: "Cybersecurity", icon: Shield, description: "Secure infrastructure and threat analysis", category: "Security" },
  { name: "Ethical Hacking", icon: Bug, description: "Penetration testing and vulnerability assessment", category: "Security" },
  { name: "C/C++", icon: Cpu, description: "High-performance system programming", category: "Development" },
  { name: "Game Development", icon: Gamepad2, description: "Unity, Unreal Engine gaming experiences", category: "Development" },
  { name: "3D Modeling", icon: Box, description: "Blender, Maya 3D visualization", category: "Design" },
  { name: "CAD Design", icon: Ruler, description: "AutoCAD, SolidWorks engineering design", category: "Design" },
  { name: "IoT Solutions", icon: Wifi, description: "Arduino, Raspberry Pi connected devices", category: "Hardware" },
  { name: "Embedded Systems", icon: Microchip, description: "Firmware and hardware integration", category: "Hardware" },
];

const categories = [...new Set(services.map(service => service.category))];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Zapsters | Tech Solutions & Internships</title>
        <meta name="description" content="Explore our comprehensive tech services including web development, UI/UX design, AI/ML, cybersecurity, and more. Professional solutions for your business needs." />
      </Helmet>

      <main className="min-h-screen bg-black">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20"></div>
        </div>

        <div className="container pt-24 pb-16">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Our <span className="text-purple-500">Services</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive tech solutions across multiple domains. From cutting-edge development to innovative design.
            </p>
          </div>

          {/* Services by Category */}
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(service => service.category === category).map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.name}
                      className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-3 group-hover:scale-110 transition-transform shadow-md">
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-white/60 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Get in touch with our expert team to discuss your requirements and bring your ideas to life.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;