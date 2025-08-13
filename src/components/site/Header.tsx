import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b glass bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-black text-2xl">
          <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center">
            <span className="text-white font-black text-lg">Z</span>
          </div>
          <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">Zapsters</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/team" 
            className={({ isActive }) => 
              `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
            }
          >
            Team
          </NavLink>
          <NavLink 
            to="/internships" 
            className={({ isActive }) => 
              `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
            }
          >
            Internships
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
            }
          >
            Contact
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:flex glass">
            <Link to="/internships">Join Program</Link>
          </Button>
          <Button asChild variant="hero">
            <Link to="/contact">Start Project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
