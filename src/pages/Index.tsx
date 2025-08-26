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

      {/* Services */}
      <ServicesGrid />

      <section id="legacy-services" className="py-16 md:py-24 text-black">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            From first pixel to final deploy — a full-stack partner for ambitious teams.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="group rounded-2xl border glass p-6 shadow-md hover:shadow-lg transition-all">
              <Code2 className="text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
              <p className="mt-2 text-gray-600">
                Robust, scalable web apps using modern stacks with performance at heart.
              </p>
            </article>
            <article className="group rounded-2xl border glass p-6 shadow-md hover:shadow-lg transition-all">
              <Palette className="text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">UI/UX Design</h3>
              <p className="mt-2 text-gray-600">
                Human-centered interfaces that look great and feel effortless.
              </p>
            </article>
            <article className="group rounded-2xl border glass p-6 shadow-md hover:shadow-lg transition-all">
              <GraduationCap className="text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Internships</h3>
              <p className="mt-2 text-gray-600">
                We connect motivated students with real projects and mentorship.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="py-16 text-black">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border glass p-8 md:p-12 shadow-lg">
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold">Zapsters Internship Program</h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Hands-on experience with guidance from senior engineers and designers. Build a portfolio that stands out.
              </p>
              <div className="mt-6">
                <Button asChild className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:shadow-lg">
                  <Link to="/contact">Apply now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <TeamSection />

      {/* Events */}
      <section className="py-20 md:py-32 text-black relative">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
                Our Latest
              </span>
              <br />
              <span>Events & Workshops</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Driving innovation through knowledge sharing and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Noctivus */}
            <Card className="group glass rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 p-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-full h-full text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Noctivus '25 Cybersecurity Symposium</h3>
                  <p className="text-gray-600">
                    National level cybersecurity symposium conducted at Velammal Engineering College, featuring workshops on ethical hacking, penetration testing, and modern security practices.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>January 2025</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Velammal Engineering College</span></div>
                </div>
              </CardContent>
            </Card>

            {/* Panimalar */}
            <Card className="group glass rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 p-3 group-hover:scale-110 transition-transform">
                  <Palette className="w-full h-full text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Panimalar UI/UX Workshop</h3>
                  <p className="text-gray-600">
                    Comprehensive hands-on workshop on modern UI/UX design principles, prototyping tools, and user research methodologies for aspiring designers.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 2024</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Panimalar Engineering College</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 text-black">
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

      {/* CTA */}
      <section className="py-16 md:py-24 text-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something great?</h2>
          <p className="mt-3 text-gray-600">
            Tell us about your idea — we'll turn it into a product people love.
          </p>
          <div className="mt-8">
            <Button className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:shadow-lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
