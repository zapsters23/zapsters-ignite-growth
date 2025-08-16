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
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="container">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black">
            Meet Our
            <br />
            Leadership Team
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto font-light leading-relaxed">
            Passionate leaders and expert engineers working together to deliver exceptional results.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className={`group border border-white/20 bg-white/10 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in ${member.type === 'ceo' ? 'lg:col-span-2 max-w-4xl mx-auto' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8 md:p-12">
                  <div className={`flex flex-col ${member.type === 'ceo' ? 'md:flex-row' : ''} items-center gap-8`}>
                    {/* Photo */}
                    <div className={`relative ${member.type === 'ceo' ? 'w-48 h-48' : 'w-32 h-32'}`}>
                      <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-purple-400/30 group-hover:border-purple-400/60 transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-3 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className={`text-center ${member.type === 'ceo' ? 'md:text-left' : ''} space-y-4 flex-1`}>
                      <div>
                        <h3 className={`font-black tracking-tight text-black transition-colors ${member.type === 'ceo' ? 'text-3xl' : 'text-2xl'}`}>
                          {member.name}
                        </h3>
                        <p className="text-lg text-black/70 font-medium">{member.role}</p>
                      </div>

                      <p className="text-black/80 leading-relaxed">
                        {member.description}
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {member.expertise.map((skill) => (
                          <div key={skill} className="bg-white/20 text-black border border-white/30 hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-colors">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Team */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-black">
            Our Expert Tech Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techTeam.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.name}
                  className="group border border-white/20 bg-white/10 backdrop-blur-xl rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-sm text-black/60">{member.expertise}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
