import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const eventsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Event",
      name: "Noctivus '25 — National Level Cybersecurity Symposium",
      location: {
        "@type": "Place",
        name: "Velammal Engineering College",
        address: "Chennai, India",
      },
    },
    {
      "@type": "Event",
      name: "UI/UX Workshop",
      location: {
        "@type": "Place",
        name: "Panimalar Engineering College",
        address: "Chennai, India",
      },
    },
  ],
};

const Team = () => {
  // Team members data
  const teamMembers = [
    { 
      name: "Sabari Raja", 
      role: "CEO", 
      description: "Vision, partnerships, and an obsession with quality. Leads product and design direction.",
      focus: "Focus areas: product strategy, brand, and designing delightful experiences at scale.",
      isCEO: true
    },
    { 
      name: "Rahul", 
      role: "CTO", 
      description: "Engineering strategy, performance, and platform architecture.",
      focus: "Focus areas: web performance, secure data, and developer experience."
    },
    { 
      name: "Guru Prasanth", 
      role: "Full-stack Engineer", 
      description: "Develops end-to-end solutions with expertise in both frontend and backend technologies.",
      focus: "Focus areas: scalable architecture, API design, and responsive interfaces."
    },
    { 
      name: "Balakumaran", 
      role: "Red Teamer", 
      description: "Security expert specializing in penetration testing and vulnerability assessment.",
      focus: "Focus areas: network security, web application security, and red team operations."
    },
    { 
      name: "Nabeelah Anjum", 
      role: "Red Teamer", 
      description: "Cybersecurity specialist with expertise in offensive security techniques.",
      focus: "Focus areas: social engineering, threat modeling, and security awareness."
    },
    { 
      name: "Murali Vijay", 
      role: "Senior UI/UX Designer", 
      description: "Creates intuitive and visually appealing user interfaces and experiences.",
      focus: "Focus areas: interaction design, visual design, and user research."
    },
    { 
      name: "Praveen S", 
      role: "Marketing Manager", 
      description: "Drives marketing strategies and campaigns to increase brand awareness and reach.",
      focus: "Focus areas: digital marketing, content strategy, and brand development."
    },
    { 
      name: "Praveen N", 
      role: "Graphic Designer", 
      description: "Creates visually compelling graphics and illustrations for various platforms.",
      focus: "Focus areas: brand identity, digital graphics, and visual storytelling."
    },
    { 
      name: "Raghunandhan T", 
      role: "Graphic Designer", 
      description: "Designs creative visual assets that communicate brand messages effectively.",
      focus: "Focus areas: print design, digital media, and brand consistency."
    },
    { 
      name: "Vishal R", 
      role: "Graphic Designer", 
      description: "Crafts engaging visual content that enhances brand recognition and appeal.",
      focus: "Focus areas: illustration, typography, and motion graphics."
    },
    { 
      name: "Rahul G S", 
      role: "Graphic Designer", 
      description: "Develops eye-catching designs that elevate brand presence across platforms.",
      focus: "Focus areas: UI graphics, social media assets, and promotional materials."
    },
    { 
      name: "Rithik Balaji", 
      role: "UI/UX Designer", 
      description: "Designs intuitive user interfaces and seamless user experiences.",
      focus: "Focus areas: user-centered design, wireframing, and prototyping."
    },
    { 
      name: "Sanjay Akash", 
      role: "Front End Developer", 
      description: "Builds responsive and interactive user interfaces with modern web technologies.",
      focus: "Focus areas: React, responsive design, and performance optimization."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zapsters Team — Leaders, Tech Crew & Events</title>
        <meta
          name="description"
          content="Meet the Zapsters team: CEO, CTO, and tech crew. See our recent events including Noctivus '25 and Panimalar UI/UX workshop."
        />
        <link rel="canonical" href="/team" />
        <script type="application/ld+json">{JSON.stringify(eventsSchema)}</script>
      </Helmet>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-indigo-500">
            Our Team
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            A compact, high-impact team that ships premium experiences and mentors the next generation.
          </p>

          {/* Team Members */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className={`border border-indigo-900 bg-gray-900 rounded-2xl overflow-hidden ${member.isCEO ? 'col-span-2' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className={member.isCEO ? "h-16 w-16" : "h-14 w-14"}>
                      <AvatarImage 
                        src={`/team/${member.name.replace(/\s+/g, "-").toLowerCase()}.jpg`} 
                        alt={member.name} 
                      />
                      <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className={`${member.isCEO ? "text-2xl" : "text-xl"} text-gray-100`}>
                        {member.name} {member.role ? `— ${member.role}` : ""}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {member.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">
                    {member.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
