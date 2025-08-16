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
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-indigo-700">
            Our Team & Events
          </h1>
          <p className="mt-3 text-black max-w-2xl">
            A compact, high-impact team that ships premium experiences and mentors the next generation.
          </p>

          {/* Leaders */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CEO */}
            <Card className="md:col-span-2 border border-indigo-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/team/sabari-raja.jpg" alt="Sabari Raja" />
                    <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl text-black">Sabari Raja — CEO</CardTitle>
                    <CardDescription className="text-black">
                      Vision, partnerships, and an obsession with quality. Leads product and design direction.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-black">
                  Focus areas: product strategy, brand, and designing delightful experiences at scale.
                </p>
              </CardContent>
            </Card>

            {/* CTO */}
            <Card className="border border-indigo-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/team/rahul.jpg" alt="Rahul" />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl text-black">Rahul — CTO</CardTitle>
                    <CardDescription className="text-black">
                      Engineering strategy, performance, and platform architecture.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-black">
                  Focus areas: web performance, secure data, and developer experience.
                </p>
              </CardContent>
            </Card>

            {/* Tech Team */}
            <Card className="border border-indigo-300">
              <CardHeader>
                <CardTitle className="text-xl text-black">Tech Team</CardTitle>
                <CardDescription className="text-black">
                  Designers, engineers, and interns shipping weekly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Balakumaran", role: "Red Teamer" },
                    { name: "Nabeelah Anjum", role: "Red Teamer" },
                    { name: "Murali Vijay", role: "Senior UI/UX Designer" },
                    { name: "Guru Prasanth", role: "Full-stack Engineer" }
                  ].map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3 rounded-lg border border-indigo-200 p-3"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={`/team/${m.name.replace(/\s+/g, "-").toLowerCase()}.jpg`}
                          alt={`${m.name} — ${m.role}`}
                        />
                        <AvatarFallback>{m.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium leading-tight text-black">{m.name}</p>
                        <p className="text-xs text-black">{m.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-700">
              Events Conducted
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-indigo-300">
                <CardHeader>
                  <CardTitle className="text-black">
                    Noctivus '25 — National Level Cybersecurity Symposium
                  </CardTitle>
                  <CardDescription className="text-black">
                    Velammal Engineering College • Chennai
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black">
                    Hands-on labs, expert talks, and live demos on securing modern web apps and infrastructure.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-indigo-300">
                <CardHeader>
                  <CardTitle className="text-black">UI/UX Workshop</CardTitle>
                  <CardDescription className="text-black">
                    Panimalar Engineering College • Chennai
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black">
                    Design systems, accessibility, and prototyping for high-impact product teams.
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
