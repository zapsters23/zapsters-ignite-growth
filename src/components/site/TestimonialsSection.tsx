import InfiniteTestimonials from "./InfiniteTestimonials";
import { motion } from "framer-motion";
import DottedGlowBackground from "@/components/aceternity/backgrounds/DottedGlowBackground";

const TestimonialsSection = () => {
  return (
    <DottedGlowBackground className="py-20 md:py-32">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            What Our Clients
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say
            about working with Zapsters.
          </p>
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <InfiniteTestimonials />
      </div>
    </DottedGlowBackground>
  );
};

export default TestimonialsSection;
