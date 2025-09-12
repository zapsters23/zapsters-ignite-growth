import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import zapsterLogo from "@/assets/zapsters_logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-2xl border-b border-gray-700/50">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg">
          <img 
            src={zapsterLogo} 
            alt="Zapsters Logo" 
            className="w-16 h-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" 
          />
          <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent font-black text-xl">
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
                `transition-all duration-300 hover:text-violet-400 hover:scale-105 px-3 py-2 rounded-xl hover:bg-violet-700/30 ${
                  isActive ? "text-violet-400 bg-violet-700/40" : "text-gray-300"
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
            className="hidden md:flex text-gray-300 hover:text-gray-400 hover:bg-gray-700/30 rounded-xl"
          >
            <Link to="/internships">Join Program</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 rounded-2xl px-6 shadow-lg shadow-gray-500/30 hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact">Start Project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
