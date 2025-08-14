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

      <HeroModern />

      <ServicesGrid />

      <section id="legacy-services" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            From first pixel to final deploy — a full-stack partner for ambitious teams.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="group rounded-xl border glass p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <Code2 className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
              <p className="mt-2 text-muted-foreground">
                Robust, scalable web apps using modern stacks with performance at heart.
              </p>
            </article>
            <article className="group rounded-xl border glass p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <Palette className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">UI/UX Design</h3>
              <p className="mt-2 text-muted-foreground">
                Human-centered interfaces that look great and feel effortless.
              </p>
            </article>
            <article className="group rounded-xl border glass p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <GraduationCap className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Internships</h3>
              <p className="mt-2 text-muted-foreground">
                We connect motivated students with real projects and mentorship.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="internships" className="py-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border glass p-8 md:p-12 shadow-[var(--shadow-elegant)]">
            <div className="absolute inset-0 -z-10 opacity-40 bg-[var(--gradient-primary)]" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold">Zapsters Internship Program</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Hands-on experience with guidance from senior engineers and designers. Build a portfolio that stands out.
              </p>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link to="/contact">Apply now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">A taste of the builds and designs we love. More on request.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="rounded-xl border glass p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <Rocket className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">SaaS Dashboard</h3>
              <p className="mt-2 text-muted-foreground">Realtime analytics, billing, and teams. 99+ Lighthouse score.</p>
            </article>
            <article className="rounded-xl border glass p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <Sparkles className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">E‑commerce Revamp</h3>
              <p className="mt-2 text-muted-foreground">Headless storefront with blazing performance and smooth UX.</p>
            </article>
            <article className="rounded-xl border glass p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <Shield className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Gov Portal UI</h3>
              <p className="mt-2 text-muted-foreground">Accessible, responsive, and secure by default for all citizens.</p>
            </article>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      
      <TeamSection />
      
      {/* Events Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(1000px circle at 70% 30%, hsl(var(--brand-1) / 0.1), transparent 70%)"
            }}
          />
        </div>
        
        <div className="container">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                Our Latest
              </span>
              <br />
              <span className="text-foreground">Events & Workshops</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Driving innovation through knowledge sharing and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event 1 */}
            <Card className="group glass hover-lift slide-up">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-full h-full text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Noctivus '25 Cybersecurity Symposium
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    National level cybersecurity symposium conducted at Velammal Engineering College, featuring workshops on ethical hacking, penetration testing, and modern security practices.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Velammal Engineering College</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event 2 */}
            <Card className="group glass hover-lift slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3 group-hover:scale-110 transition-transform">
                  <Palette className="w-full h-full text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Panimalar UI/UX Workshop
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive hands-on workshop on modern UI/UX design principles, prototyping tools, and user research methodologies for aspiring designers.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>December 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Panimalar Engineering College</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">FAQ</h2>
          <Accordion type="single" collapsible className="mt-8">
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something great?</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us about your idea — we'll turn it into a product people love.
          </p>
          <div className="mt-8">
            <Button className="bg-indigo-600">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;