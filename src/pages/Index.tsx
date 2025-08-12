import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-zapsters.jpg";
import GradientSpotlight from "@/components/site/GradientSpotlight";
import { Code2, Palette, GraduationCap } from "lucide-react";
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
      </Helmet>

      <section className="relative pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Abstract gradient hero background for Zapsters web agency"
            className="h-full w-full object-cover opacity-50"
            loading="eager"
          />
        </div>
        <GradientSpotlight />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-[var(--gradient-primary)] bg-clip-text text-transparent animate-enter">
            Zapsters — Build. Design. Launch.
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground animate-fade-in">
            Zapsters crafts modern web experiences, premium UI/UX, and empowers students with real-world internships.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#services">Our services</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            From first pixel to final deploy — a full-stack partner for ambitious teams.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="group rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <Code2 className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
              <p className="mt-2 text-muted-foreground">
                Robust, scalable web apps using modern stacks with performance at heart.
              </p>
            </article>
            <article className="group rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
              <Palette className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">UI/UX Design</h3>
              <p className="mt-2 text-muted-foreground">
                Human-centered interfaces that look great and feel effortless.
              </p>
            </article>
            <article className="group rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
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
          <div className="relative overflow-hidden rounded-2xl border bg-card p-8 md:p-12 shadow-[var(--shadow-elegant)]">
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something great?</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us about your idea — we’ll turn it into a product people love.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
