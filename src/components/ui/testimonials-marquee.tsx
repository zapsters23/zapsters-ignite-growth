"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Inc",
    content: "Zapsters delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "The UI/UX design from Zapsters transformed our product. User engagement increased by 150% after the redesign!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "SecureNet",
    content: "Their cybersecurity assessment uncovered critical vulnerabilities we didn't know existed. Professional, thorough, and highly recommended.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Engineering Lead",
    company: "CloudVentures",
    content: "The intern from Zapsters' program was incredibly well-prepared. Best internship program we've worked with.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Founder",
    company: "StartupHub",
    content: "Zapsters' CTF event was a massive success. Engaging, challenging, and professionally executed. Our team learned so much!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Dev Manager",
    company: "CodeCraft",
    content: "Outstanding workshop on modern web development. The hands-on approach and real-world examples made complex topics easy to grasp.",
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group"
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 h-full">
        {/* Quote icon */}
         <div className="absolute -top-4 -left-4 text-6xl text-white/20 font-serif">"</div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>

        {/* Author */}
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-black font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-400">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>

        {/* Hover glow */}
         <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-300" />
      </div>
    </motion.div>
  );
};

export const TestimonialsMarquee: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
             What Our Clients Say
           </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Zapsters.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Gradient orbs */}
       <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
       <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
};
