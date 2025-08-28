import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  Microchip,
  GraduationCap,
  Users,
  Trophy
} from "lucide-react";

const services = [
  { name: "Java", icon: Code2, category: "Programming", level: "Intermediate" },
  { name: "Python", icon: Code2, category: "Programming", level: "Beginner" },
  { name: "Full Stack", icon: Globe, category: "Web Dev", level: "Advanced" },
  { name: "Web Development", icon: Globe, category: "Web Dev", level: "Beginner" },
  { name: "UI/UX", icon: Palette, category: "Design", level: "Intermediate" },
  { name: "Data Science", icon: BarChart3, category: "Analytics", level: "Advanced" },
  { name: "AI/ML", icon: Brain, category: "AI", level: "Advanced" },
  { name: "Data Mining", icon: Search, category: "Analytics", level: "Intermediate" },
  { name: "Cybersecurity", icon: Shield, category: "Security", level: "Intermediate" },
  { name: "Ethical Hacking", icon: Bug, category: "Security", level: "Advanced" },
  { name: "C/C++", icon: Cpu, category: "Programming", level: "Advanced" },
  { name: "Game Development", icon: Gamepad2, category: "Games", level: "Intermediate" },
  { name: "3D Modeling", icon: Box, category: "Design", level: "Intermediate" },
  { name: "CAD Design", icon: Ruler, category: "Design", level: "Intermediate" },
  { name: "IoT", icon: Wifi, category: "Hardware", level: "Advanced" },
  { name: "Embedded Designs", icon: Microchip, category: "Hardware", level: "Advanced" },
];

const categories = [...new Set(services.map(s => s.category))];

const levelColors = {
  "Beginner": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Intermediate": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Advanced": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
};

const Internships = () => {
  const internshipSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Zapsters Internship Program",
    description: "Comprehensive tech internship covering 16+ domains including AI/ML, cybersecurity, web development, and more",
    provider: {
      "@type": "Organization",
      name: "Zapsters",
      url: "/"
    }
  };

  return (
    <>
      <Helmet>
        <title>Zapsters Internships — 16+ Tech Domains & Real Projects</title>
        <meta
          name="description"
          content="Join Zapsters internship program: Java, Python, AI/ML, cybersecurity, web dev, UI/UX & more. Real projects, expert mentorship."
        />
        <link rel="canonical" href="/internships" />
        <script type="application/ld+json">{JSON.stringify(internshipSchema)}</script>
      </Helmet>

      <section className="py-20 md:py-32 relative bg-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="container">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-20">

            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                Launch Your
              </span>
              <br />
              <span className="text-foreground">Tech Career</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Real projects, expert mentorship, and hands-on experience across 16+ cutting-edge technologies
            </p>

            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">16+</div>
                <div className="text-sm text-muted-foreground">Tech Domains</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Successful Interns</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Month Program</div>
              </div>
            </div>

            <Button asChild size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>

          {/* Services by Category */}
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                {category}
              </span>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter(service => service.category === category)
                  .map((service) => {
                    const Icon = service.icon;
                    return (
                      <Card key={service.name} className="group hover-scale rounded-3xl border border-white/10 bg-white/5 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 p-3 group-hover:scale-110 transition-transform">
                              <Icon className="w-full h-full text-white" />
                            </div>
                            <Badge className={levelColors[service.level as keyof typeof levelColors]}>
                              {service.level}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {service.name}
                          </CardTitle>
                          <CardDescription>
                            Comprehensive {service.level.toLowerCase()} level training
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="w-4 h-4" />
                              <span>Small batch mentorship</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Trophy className="w-4 h-4" />
                              <span>Real project experience</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="text-center mt-20 p-12 rounded-3xl border border-white/10 bg-white/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful interns who've launched their tech careers with Zapsters
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Apply for Internship</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internships;