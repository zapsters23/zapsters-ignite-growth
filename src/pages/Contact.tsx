import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thanks!",
        description: "We’ll get back to you within 24 hours.",
      });
      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:hello@zapsters.co?subject=${subject}&body=${body}`;
      form.reset();
    }, 600);
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
        <title>Contact Zapsters — Start a Project</title>
        <meta
          name="description"
          content="Contact Zapsters to build modern web apps and premium UI/UX, or apply to our internship program."
        />
        <link rel="canonical" href="/contact" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">Let’s talk</h1>
          <p className="mt-2 text-muted-foreground">
            Share a few details and we’ll reach out shortly.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required placeholder="Tell us about your project or internship interest." rows={6} />
            </div>
            <div>
              <Button type="submit" variant="hero" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
