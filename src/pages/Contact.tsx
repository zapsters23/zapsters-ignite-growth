import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    
    // Create mailto link
    const mailtoSubject = encodeURIComponent(subject || `New inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:hello@zapsters.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    form.reset();
    setLoading(false);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Zapsters",
    url: "/contact",
  };

  return (
    <>
      <Helmet>
        <title>Contact Zapsters — Let's Build Something Amazing</title>
        <meta
          name="description"
          content="Get in touch with Zapsters for web development, UI/UX design, or internship opportunities. We respond within 24 hours."
        />
        <link rel="canonical" href="/contact" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>

      <section className="py-20 md:py-32 relative min-h-screen bg-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                    Let's Build
                  </span>
                  <br />
                  <span className="text-white">Something Amazing</span>
                </h1>
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  Ready to start your project or join our team? We're here to turn your vision into reality.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 p-4 shadow-lg shadow-purple-500/30">
                        <Mail className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-xl text-white">Email Us</h3>
                        <a href="mailto:admin@zapsters.in" className="block text-white/70 hover:text-gray-300 transition-colors text-lg font-medium">
                          admin@zapsters.in
                        </a>
                        <a href="mailto:support@zapsters.in" className="block text-white/70 hover:text-gray-300 transition-colors text-lg font-medium">
                          support@zapsters.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 p-4 shadow-lg shadow-purple-500/30">
                        <Phone className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-xl text-white">Call Us</h3>
                        <a href="tel:+919342408432" className="block text-white/70 hover:text-gray-300 transition-colors text-lg font-medium">
                          +91 9342 408 432
                        </a>
                        <a href="tel:+919514408432" className="block text-white/70 hover:text-gray-300 transition-colors text-lg font-medium">
                          +91 9514 408 432
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 p-4 shadow-lg shadow-purple-500/30">
                        <MapPin className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-xl text-white">Visit Us</h3>
                        <p className="text-white/70 text-lg">Chennai, Tamil Nadu</p>
                        <p className="text-white/70 text-lg">India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 p-4 shadow-lg shadow-purple-500/30">
                        <Clock className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-xl text-white">Response Time</h3>
                        <p className="text-white/70 text-lg">Within 24 hours</p>
                        <p className="text-white/70 text-lg">Monday - Friday, 9 AM - 6 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-8">
                    <div className="space-y-6">
                      <h3 className="font-bold text-xl text-white flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 p-4 shadow-lg shadow-purple-500/30">
                          <Linkedin className="w-full h-full text-white" />
                        </div>
                        Follow Us
                      </h3>
                      <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-all duration-300 hover:scale-105 p-3 rounded-xl hover:bg-purple-900/20">
                          <Linkedin className="w-6 h-6" />
                          <span className="font-medium">LinkedIn</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-all duration-300 hover:scale-105 p-3 rounded-xl hover:bg-purple-900/20">
                          <Instagram className="w-6 h-6" />
                          <span className="font-medium">Instagram</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-all duration-300 hover:scale-105 p-3 rounded-xl hover:bg-purple-900/20">
                          <Twitter className="w-6 h-6" />
                          <span className="font-medium">Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10">
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <h2 className="text-3xl font-black text-white flex items-center gap-4">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                    Send us a message
                  </h2>
                  <p className="text-white/70 text-lg">
                    Tell us about your project and we'll get back to you with a detailed proposal.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-white font-semibold text-lg">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Karthik Murugan" 
                        required 
                        className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder:text-white/50 h-14 text-lg focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-white font-semibold text-lg">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="karthik@company.com" 
                        required 
                        className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder:text-white/50 h-14 text-lg focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-white font-semibold text-lg">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Project inquiry / Internship application" 
                      className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder:text-white/50 h-14 text-lg focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-white font-semibold text-lg">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements, timeline, budget, or any questions you have..."
                      className="min-h-[180px] rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder:text-white/50 text-lg focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={loading} 
                    size="lg" 
                    className="w-full h-16 text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 rounded-2xl shadow-lg shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;