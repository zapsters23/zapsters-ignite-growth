import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Zap, Code, Palette, Database, Brain } from "lucide-react";
import ceoPic from "@/assets/team-ceo.jpg";
import ctoPic from "@/assets/team-cto.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sabari Raja",
      role: "Chief Executive Officer",
      type: "ceo",
      image: ceoPic,
      icon: Crown,
      description: "Visionary leader driving innovation and strategic growth at Zapsters.",
      expertise: ["Strategic Planning", "Business Development", "Team Leadership"]
    },
    {
      name: "Rahul",
      role: "Chief Technology Officer", 
      type: "cto",
      image: ctoPic,
      icon: Zap,
      description: "Tech mastermind architecting scalable solutions and cutting-edge systems.",
      expertise: ["System Architecture", "Cloud Infrastructure", "Technical Strategy"]
    }
  ];

  const techTeam = [
    { name: "Balakumaran", icon: Code, expertise: "Full Stack Development" },
    { name: "Nabeelah Anjum", icon: Palette, expertise: "UI/UX Design" },
    { name: "Guru Prasanth", icon: Database, expertise: "Data Engineering" },
    { name: "Murali Vijay", icon: Brain, expertise: "AI/ML Solutions" }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(800px circle at 30% 80%, hsl(var(--brand-2) / 0.12), transparent 60%)"
          }}
        />
      </div>
      
      <div className="container">
        <div className="text-center space-y-6 mb-16 slide-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Meet Our
            </span>
            <br />
            <span className="text-foreground">Leadership Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Passionate leaders and expert engineers working together to deliver exceptional results.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card 
                key={member.name} 
                className={`group glass hover-lift slide-up ${member.type === 'ceo' ? 'lg:col-span-2 max-w-4xl mx-auto' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className={`flex flex-col ${member.type === 'ceo' ? 'md:flex-row' : ''} items-center gap-8`}>
                    {/* Photo */}
                    <div className={`relative ${member.type === 'ceo' ? 'w-48 h-48' : 'w-32 h-32'}`}>
                      <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className={`text-center ${member.type === 'ceo' ? 'md:text-left' : ''} space-y-4 flex-1`}>
                      <div>
                        <h3 className={`font-black tracking-tight group-hover:text-primary transition-colors ${member.type === 'ceo' ? 'text-3xl' : 'text-2xl'}`}>
                          {member.name}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">{member.role}</p>
                      </div>
                      
                      <p className="text-foreground leading-relaxed">
                        {member.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="glass">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tech Team */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Our Expert Tech Team
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techTeam.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card 
                  key={member.name} 
                  className="group glass hover-lift slide-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-[var(--gradient-primary)] p-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{member.expertise}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;