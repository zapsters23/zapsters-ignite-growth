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

      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(800px circle at 70% 30%, hsl(var(--brand-1) / 0.15), transparent 60%)"
            }}
          />
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                  <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                    Let's Build
                  </span>
                  <br />
                  <span className="text-foreground">Something Amazing</span>
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Ready to start your project or join our team? We're here to turn your vision into reality.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3">
                        <Mail className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Email Us</h3>
                        <a href="mailto:admin@zapsters.in" className="block text-muted-foreground hover:text-primary transition-colors">
                          admin@zapsters.in
                        </a>
                        <a href="mailto:support@zapsters.in" className="block text-muted-foreground hover:text-primary transition-colors">
                          support@zapsters.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3">
                        <Phone className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <a href="tel:+919342408432" className="block text-muted-foreground hover:text-primary transition-colors">
                          +91 9342 408 432
                        </a>
                        <a href="tel:+919514408432" className="block text-muted-foreground hover:text-primary transition-colors">
                          +91 9514 408 432
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3">
                        <MapPin className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Visit Us</h3>
                        <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                        <p className="text-muted-foreground">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3">
                        <Clock className="w-full h-full text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Response Time</h3>
                        <p className="text-muted-foreground">Within 24 hours</p>
                        <p className="text-muted-foreground">Monday - Friday, 9 AM - 6 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] p-3">
                          <Linkedin className="w-full h-full text-white" />
                        </div>
                        Follow Us
                      </h3>
                      <div className="flex items-center gap-4">
                        <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                          <span>LinkedIn</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Instagram className="w-5 h-5" />
                          <span>Instagram</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="w-5 h-5" />
                          <span>Twitter</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Tell us about your project and we'll get back to you with a detailed proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Project inquiry / Internship application" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements, timeline, budget, or any questions you have..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" disabled={loading} size="lg" variant="hero" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;