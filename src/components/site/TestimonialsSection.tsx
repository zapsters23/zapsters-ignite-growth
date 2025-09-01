import InfiniteTestimonials from "./InfiniteTestimonials";



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

        {/* Infinite Scrolling Testimonials */}
        <InfiniteTestimonials />
      </div>
    </section>
  );
};

export default TestimonialsSection;
