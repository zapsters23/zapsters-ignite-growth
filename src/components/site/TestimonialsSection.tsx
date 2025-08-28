import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Product Lead at TechCorp",
    image: testimonial1,
    content:
      "Zapsters transformed our outdated platform into a modern, high-performing application. Their attention to detail and technical expertise is unmatched. Our user engagement increased by 200%!",
    rating: 5,
  },
  {
    name: "Marco Rodriguez",
    role: "Founder & CEO at InnovateLab",
    image: testimonial2,
    content:
      "Working with Zapsters was a game-changer for our startup. They delivered a beautiful, scalable solution that helped us secure our Series A funding. The team's professionalism is exceptional.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "CTO at DataFlow Inc",
    image: testimonial3,
    content:
      "The internship program at Zapsters is phenomenal. The graduates they produce are work-ready from day one. We've hired multiple interns and they've all exceeded our expectations.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 relative bg-black">
      {/* Enhanced background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-violet-900/15 to-purple-900/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container">
        {/* Section Heading */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            What Our Clients
            <br />
            <span className="text-purple-600">Say About Us</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say
            about working with Zapsters.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-3 group-hover:scale-110 transition-transform shadow-lg">
                <Quote className="w-full h-full text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-purple-500 text-purple-500"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg leading-relaxed text-white">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
