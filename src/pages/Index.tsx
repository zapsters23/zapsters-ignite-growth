 import { Helmet } from "react-helmet-async";
 import { motion } from "motion/react";
 import Prism from "@/components/ui/prism";
 import { AnimatedCounter } from "@/components/ui/animated-counter";
 import { ServicesGrid } from "@/components/ui/services-grid";
 import { TestimonialsMarquee } from "@/components/ui/testimonials-marquee";
 import LogoLoop from "@/components/LogoLoop";
 import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma } from "react-icons/fa6";
 import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiGraphql } from "react-icons/si";

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zapsters",
     url: "/",
    sameAs: [],
    logo: "/favicon.ico",
  };

  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zapsters",
    url: "/",
    potentialAction: {
      "@type": "SearchAction",
      target: "/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Zapsters offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in web development, UI/UX design, cybersecurity, CTF hosting, internship programs, and technical workshops.",
        },
      },
      {
        "@type": "Question",
        name: "How can I start a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click 'Start Your Project' to reach our contact page. We'll respond within 24 hours to discuss your needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you accept internship applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our internship program runs year-round. Apply via the Contact page and we'll get back to you with next steps.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Zapsters — Web Development, UI/UX, Cybersecurity & More</title>
        <meta
          name="description"
          content="Zapsters delivers cutting-edge web development, stunning UI/UX design, robust cybersecurity solutions, CTF hosting, internships, and professional workshops."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>



       {/* Hero Section */}
       <div className="relative min-h-screen bg-black overflow-hidden">
         {/* Prism Background */}
         <div className="flex items-center justify-center min-h-screen">
         <div style={{ width: '100%', height: '100vh', position: 'relative', marginTop: '64px' }}>
           <Prism
             animationType="rotate"
             timeScale={0.5}
             height={3.5}
             baseWidth={5.5}
             scale={2.5}
             hueShift={0}
             colorFrequency={1}
             noise={0}
             glow={0.5}
           />
         </div>
         </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none"></div>
         
         {/* Floating Tech Icons */}
         <div className="absolute inset-0 overflow-hidden">
           {/* Top corners */}
           <div className="absolute top-[10%] left-[5%] text-white/5 hover:text-white/60 transition-all duration-500 animate-float cursor-pointer group" style={{ animationDelay: '0s' }}>
             <FaReact size={50} className="group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform duration-500" />
           </div>
           <div className="absolute top-[12%] right-[6%] text-white/5 hover:text-white/60 transition-all duration-500 animate-float cursor-pointer group" style={{ animationDelay: '1.5s' }}>
             <SiNextdotjs size={48} className="group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform duration-500" />
           </div>
           
           {/* Middle left and right - well spread */}
           <div className="absolute top-[45%] left-[3%] text-white/5 hover:text-white/60 transition-all duration-500 animate-float cursor-pointer group" style={{ animationDelay: '2s' }}>
             <SiTypescript size={46} className="group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform duration-500" />
           </div>
           <div className="absolute top-[50%] right-[4%] text-white/5 hover:text-white/60 transition-all duration-500 animate-float cursor-pointer group" style={{ animationDelay: '3s' }}>
             <SiTailwindcss size={52} className="group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform duration-500" />
           </div>
           
           {/* Bottom corners */}
           <div className="absolute bottom-[15%] left-[7%] text-white/5 hover:text-white/60 transition-all duration-500 animate-float cursor-pointer group" style={{ animationDelay: '4s' }}>
             <FaNodeJs size={50} className="group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform duration-500" />
           </div>
           <div className="absolute bottom-[18%] right-[8%] text-white/5 hover:text-white/60 transition-all duration-500 animate-float cursor-pointer group" style={{ animationDelay: '0.5s' }}>
             <FaPython size={47} className="group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform duration-500" />
           </div>
         </div>

         <div className="absolute inset-0 flex flex-col items-center justify-start min-h-screen px-8 pt-[265px]">
             {/* Top Badge */}
             <div className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
               <span className="text-white text-xs font-medium tracking-wide">Innovate. Execute. Lead.</span>
             </div>
             {/* Main Headline */}
             <h1 className="text-6xl md:text-8xl font-light text-white text-center mb-4 tracking-widest uppercase" style={{ fontFamily: '"Futura", "Avant Garde", "Century Gothic", sans-serif', letterSpacing: '0.3em' }}>
               ZAPSTERS
             </h1>
             {/* Subheading */}
             <p className="text-white/90 text-base md:text-lg text-center mb-8 max-w-2xl">
               Build to Lead
             </p>
             {/* CTA Buttons */}
             <div className="flex gap-4">
               <a href="/contact" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm inline-block hover:scale-105">
                 Start Your Project
               </a>
               <a href="/services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-sm inline-block">
                 Learn More
               </a>
             </div>
         </div>
       </div>

      {/* Services Section */}
      <ServicesGrid />

      {/* Testimonials Section */}
      <TestimonialsMarquee />

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 50, suffix: "+", label: "Projects Delivered" },
              { number: 100, suffix: "+", label: "Happy Clients" },
              { number: 20, suffix: "+", label: "Interns Trained" },
              { number: 15, suffix: "+", label: "CTF Events Hosted" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Tech Stack Section */}
       <section className="relative py-20 bg-black overflow-hidden">
         <div className="flex flex-col items-center justify-center z-10">
            <p className="text-white text-xl md:text-2xl font-semibold mb-8 text-center">
              Unlock the power of cutting-edge technologies with Zapsters – where innovation meets execution.
            </p>
             <LogoLoop
               logos={[
                 { node: <FaReact />, title: "React" },
                 { node: <SiNextdotjs />, title: "Next.js" },
                 { node: <SiTypescript />, title: "TypeScript" },
                 { node: <SiTailwindcss />, title: "Tailwind CSS" },
               ]}
               speed={120}
               direction="left"
               logoHeight={64}
               gap={40}
               scaleOnHover={true}
               pauseOnHover={true}
               fadeOut={false}
               className="w-full"
             />
         </div>
       </section>

      {/* Footer */}
       <footer className="relative py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
               <h3 className="text-2xl font-bold text-white mb-4">
                 Zapsters
               </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Igniting excellence through cutting-edge technology solutions, professional training, and innovative security services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Internships</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zapsters. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;