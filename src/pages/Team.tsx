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
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            Our Team & Events
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            A compact, high‑impact team that ships premium experiences and mentors the next generation.
          </p>

          {/* Leaders */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CEO - Big card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" alt="Zapsters CEO" />
                    <AvatarFallback>CEO</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">Chief Executive Officer</CardTitle>
                    <CardDescription>
                      Vision, partnerships, and an obsession with quality. Leads product and design direction.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Focus areas: product strategy, brand, and designing delightful experiences at scale.
                </p>
              </CardContent>
            </Card>

            {/* CTO */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/placeholder.svg" alt="Zapsters CTO" />
                    <AvatarFallback>CTO</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">Chief Technology Officer</CardTitle>
                    <CardDescription>
                      Engineering strategy, performance, and platform architecture.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Focus areas: web performance, secure data, and developer experience.
                </p>
              </CardContent>
            </Card>

            {/* Tech Team */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tech Team</CardTitle>
                <CardDescription>Designers, engineers, and interns shipping weekly.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Ayesha", role: "Senior UI/UX" },
                    { name: "Rahul", role: "Frontend Engineer" },
                    { name: "Meera", role: "Product Designer" },
                    { name: "Karthik", role: "Full‑stack Engineer" },
                    { name: "Sanjana", role: "Design Intern" },
                    { name: "Vignesh", role: "Engineering Intern" },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-3 rounded-lg border glass p-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg" alt={`${m.name} — ${m.role}`} />
                        <AvatarFallback>{m.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium leading-tight">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Events Conducted</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Noctivus '25 — National Level Cybersecurity Symposium</CardTitle>
                  <CardDescription>Velammal Engineering College • Chennai</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hands‑on labs, expert talks, and live demos on securing modern web apps and infrastructure.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>UI/UX Workshop</CardTitle>
                  <CardDescription>Panimalar Engineering College • Chennai</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Design systems, accessibility, and prototyping for high‑impact product teams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
