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
    content: "Zapsters transformed our outdated platform into a modern, high-performing application. Their attention to detail and technical expertise is unmatched. Our user engagement increased by 200%!",
    rating: 5
  },
  {
    name: "Marco Rodriguez",
    role: "Founder & CEO at InnovateLab",
    image: testimonial2,
    content: "Working with Zapsters was a game-changer for our startup. They delivered a beautiful, scalable solution that helped us secure our Series A funding. The team's professionalism is exceptional.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "CTO at DataFlow Inc",
    image: testimonial3,
    content: "The internship program at Zapsters is phenomenal. The graduates they produce are work-ready from day one. We've hired multiple interns and they've all exceeded our expectations.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(1000px circle at 50% 50%, hsl(var(--brand-1) / 0.08), transparent 70%)"
          }}
        />
      </div>
      
      <div className="container">
        <div className="text-center space-y-6 mb-16 slide-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="text-foreground">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about working with Zapsters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="group glass hover-lift slide-up" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3 group-hover:scale-110 transition-transform">
                  <Quote className="w-full h-full text-white" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-lg leading-relaxed text-foreground">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;