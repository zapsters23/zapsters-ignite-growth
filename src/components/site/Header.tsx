import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/5 backdrop-blur-2xl border-b border-purple-200/30">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white font-black text-lg">Z</span>
          </div>
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent font-black">
            Zapsters
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/events", label: "Events" },
            { to: "/team", label: "Team" },
            { to: "/internships", label: "Internships" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-purple-600 hover:scale-105 px-3 py-2 rounded-xl hover:bg-purple-100/20 ${
                  isActive ? "text-purple-600 bg-purple-100/30" : "text-black/80"
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
            className="hidden md:flex text-black/80 hover:text-purple-600 hover:bg-purple-100/20 rounded-xl"
          >
            <Link to="/internships">Join Program</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 rounded-2xl px-6 shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact">Start Project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
