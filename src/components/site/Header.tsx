import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">Zapsters</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</NavLink>
          <NavLink to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</NavLink>
          <NavLink to="/team" className="text-muted-foreground hover:text-foreground transition-colors">Team</NavLink>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#internships" className="text-muted-foreground hover:text-foreground transition-colors">Internships</a>
          <NavLink to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button asChild variant="secondary">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
