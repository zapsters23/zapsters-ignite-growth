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
    title: "Headless E-commerce Revamp",
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
    desc: "Manage thousands of devices with real-time telemetry.",
    Icon: Cpu,
    tags: ["WebSockets", "Workers"],
  },
  {
    title: "Global Marketing Microsites",
    desc: "Localised, SEO-ready, and easy to launch at scale.",
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

      <section className="py-12 md:py-20 bg-black text-white relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="mx-auto max-w-5xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Projects & Case Studies
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            A snapshot of work we love. If you want a deeper dive, reach out — we'll walk you through our approach in detail.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, desc, Icon, tags }) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
                <Card className="bg-transparent border-0 shadow-none">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="text-purple-500" />
                      <CardTitle className="text-xl text-white">{title}</CardTitle>
                    </div>
                    <CardDescription className="text-white/70">{desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button asChild className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 hover:opacity-90 text-white">
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
