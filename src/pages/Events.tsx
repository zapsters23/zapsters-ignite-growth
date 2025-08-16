import { Helmet } from "react-helmet-async";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";

const events = [
  {
    id: 1,
    name: "Noctivus '25",
    description: "The ultimate tech fest bringing together innovation, competition, and learning. Join us for hackathons, workshops, and networking opportunities.",
    date: "March 15-17, 2025",
    location: "Panimalar Engineering College",
    attendees: "500+",
    status: "upcoming",
    featured: true,
    highlights: [
      "48-hour Hackathon",
      "Tech Workshops",
      "Industry Expert Talks",
      "Networking Sessions",
      "Prize Pool: ₹2,00,000"
    ]
  },
  {
    id: 2,
    name: "Tech Workshop Series",
    description: "Monthly workshops covering the latest in web development, AI/ML, and cybersecurity. Hands-on learning with industry experts.",
    date: "Every Last Saturday",
    location: "Virtual & On-campus",
    attendees: "100+",
    status: "ongoing",
    featured: false,
    highlights: [
      "Hands-on Projects",
      "Industry Mentors", 
      "Certificate of Completion",
      "Networking Opportunities"
    ]
  }
];

const Events = () => {
  const featuredEvent = events.find(event => event.featured);
  const otherEvents = events.filter(event => !event.featured);

  return (
    <>
      <Helmet>
        <title>Events - Zapsters | Tech Conferences & Workshops</title>
        <meta name="description" content="Join our exciting tech events including Noctivus '25, workshops, and networking sessions. Stay updated with the latest in technology." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-200/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="container pt-24 pb-16">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black">
              Our <span className="text-purple-600">Events</span>
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto font-light leading-relaxed">
              Join us for exciting tech events, workshops, and networking opportunities that drive innovation and learning.
            </p>
          </div>

          {/* Featured Event - Noctivus */}
          {featuredEvent && (
            <div className="mb-16">
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl animate-fade-in">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Event Info */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-300/30">
                      <Star className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">Featured Event</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-black">
                      {featuredEvent.name}
                    </h2>
                    
                    <p className="text-lg text-black/70 leading-relaxed">
                      {featuredEvent.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-black/80">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span>{featuredEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-black/80">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <span>{featuredEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-black/80">
                        <Users className="w-5 h-5 text-purple-600" />
                        <span>{featuredEvent.attendees} Expected Attendees</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-black">Event Highlights:</h3>
                      <ul className="space-y-2">
                        {featuredEvent.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-black/70">
                            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg">
                      Register Now
                    </button>
                  </div>

                  {/* Event Image Placeholder */}
                  <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl h-96 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mx-auto">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-black/60">
                        <p className="font-medium">Event Image</p>
                        <p className="text-sm">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Events */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8">
              Other Events
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-black">{event.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'ongoing' 
                          ? 'bg-green-100 text-green-600 border border-green-200' 
                          : 'bg-blue-100 text-blue-600 border border-blue-200'
                      }`}>
                        {event.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                      </span>
                    </div>
                    
                    <p className="text-black/70 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-black/80">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-black/80">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-black/80">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">{event.attendees} Participants</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-black">Highlights:</h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-black/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="inline-flex items-center justify-center px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-md text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-4">
                Want to Host an Event with Us?
              </h3>
              <p className="text-black/70 mb-6 max-w-2xl mx-auto">
                Partner with Zapsters to create memorable tech events and workshops for your community.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Events;
