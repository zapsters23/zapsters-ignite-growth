import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-black/10">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg">
          <div className="w-9 h-9 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center">
            <span className="text-white font-bold text-base">Z</span>
          </div>
          <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            Zapsters
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Projects" },
            { to: "/team", label: "Team" },
            { to: "/internships", label: "Internships" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-all hover:text-indigo-600 hover:underline underline-offset-4 ${
                  isActive ? "text-indigo-600" : "text-black/80"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden md:flex text-black/80 hover:text-black"
          >
            <Link to="/internships">Join Program</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <Link to="/contact">Start Project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
