import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import HeroModern from "@/components/site/HeroModern";
import ServicesGrid from "@/components/site/ServicesGrid";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import TeamSection from "@/components/site/TeamSection";
import { Code2, Palette, GraduationCap, Rocket, Sparkles, Shield, Calendar, MapPin } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
          text: "We specialize in web development, UI/UX design, and an internship program that helps students gain real-world experience.",
        },
      },
      {
        "@type": "Question",
        name: "How can I start a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click 'Start a project' to reach our contact page. We'll respond within 24 hours to discuss your needs.",
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
        <title>Zapsters — Web Development, UI/UX, Internships</title>
        <meta
          name="description"
          content="Zapsters builds high-performance web apps, designs delightful UI/UX, and helps students land internships."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <HeroModern />

      {/* Expertise */}
      <ServicesGrid />

      <TestimonialsSection />

      {/* Events */}
      <section className="py-20 md:py-32 text-white bg-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                Our Latest
              </span>
              <br />
              <span>Events & Workshops</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Driving innovation through knowledge sharing and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Noctivus */}
            <Card className="group rounded-3xl border border-white/10 bg-white/5 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 p-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-full h-full text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Noctivus '25 Cybersecurity Symposium</h3>
                  <p className="text-white/70">
                    National level cybersecurity symposium conducted at Velammal Engineering College, featuring workshops on ethical hacking, penetration testing, and modern security practices.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>January 2025</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Velammal Engineering College</span></div>
                </div>
              </CardContent>
            </Card>

            {/* Panimalar */}
            <Card className="group rounded-3xl border border-white/10 bg-white/5 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 p-3 group-hover:scale-110 transition-transform">
                  <Palette className="w-full h-full text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Panimalar UI/UX Workshop</h3>
                  <p className="text-white/70">
                    Comprehensive hands-on workshop on modern UI/UX design principles, prototyping tools, and user research methodologies for aspiring designers.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 2024</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Panimalar Engineering College</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 text-white bg-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">FAQ</h2>
          <Accordion type="single" collapsible className="mt-8 text-white">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                Web development, UI/UX design, and internships with real project experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How fast can we start?</AccordionTrigger>
              <AccordionContent>
                Discovery can begin this week. Typical projects kick off within 1–2 weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you work with startups and enterprises?</AccordionTrigger>
              <AccordionContent>
                Yes. We adapt our process and tooling to fit your stage and constraints.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-white bg-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something great?</h2>
          <p className="mt-3 text-white/70">
            Tell us about your idea — we'll turn it into a product people love.
          </p>
          <div className="mt-8">
            <Button className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 hover:opacity-90 text-white rounded-xl px-6 py-2 shadow-md hover:shadow-lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
