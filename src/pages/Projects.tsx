import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, ShoppingBag, Shield, Cpu, Globe, LineChart } from "lucide-react";

const projects = [
  {
    title: "SaaS Intelligence Dashboard",
    desc: "Realtime analytics, teams, billing. 99+ Lighthouse across the board.",
    Icon: Rocket,
    tags: ["React", "Supabase", "Tailwind"],
  },
  {
    title: "Headless E‑commerce Revamp",
    desc: "Lightning-fast storefront with smooth UX and A/B tested flows.",
    Icon: ShoppingBag,
    tags: ["Headless", "Stripe", "Edge"],
  },
  {
    title: "Gov Services Portal UI",
    desc: "Accessible by default. WCAG AA with robust UX patterns.",
    Icon: Shield,
    tags: ["Accessibility", "Design System"],
  },
  {
    title: "Fintech Data Platform",
    desc: "Secure pipelines and elegant data visualization.",
    Icon: LineChart,
    tags: ["Recharts", "RLS", "Security"],
  },
  {
    title: "IoT Fleet Console",
    desc: "Manage thousands of devices with real‑time telemetry.",
    Icon: Cpu,
    tags: ["WebSockets", "Workers"],
  },
  {
    title: "Global Marketing Microsites",
    desc: "Localised, SEO‑ready, and easy to launch at scale.",
    Icon: Globe,
    tags: ["SEO", "i18n"],
  },
];

const Projects = () => {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: p.title,
      url: "/projects",
    })),
  };

  return (
    <>
      <Helmet>
        <title>Zapsters Projects — Case Studies & Portfolio</title>
        <meta
          name="description"
          content="Explore Zapsters' web development and UI/UX case studies. Premium builds, blazing performance, and polished experiences."
        />
        <link rel="canonical" href="/projects" />
        <script type="application/ld+json">{JSON.stringify(listSchema)}</script>
      </Helmet>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            Projects & Case Studies
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            A snapshot of work we love. If you want a deeper dive, reach out — we’ll walk you through our approach in detail.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, desc, Icon, tags }) => (
              <article key={title} className="rounded-xl border glass hover-scale">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="text-primary" />
                      <CardTitle className="text-xl">{title}</CardTitle>
                    </div>
                    <CardDescription>{desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full border bg-background/60">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button asChild variant="secondary">
                        <Link to="/contact">View case study</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
