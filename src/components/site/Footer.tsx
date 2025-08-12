const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {year} Zapsters. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#services" className="story-link">Services</a>
          <a href="#internships" className="story-link">Internships</a>
          <a href="/contact" className="story-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
