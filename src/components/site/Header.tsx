import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import zapsterLogo from "@/assets/zapsters_logo.png";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
       className="fixed top-0 z-50 w-full bg-black backdrop-blur-2xl border-b border-white/10 shadow-lg"
    >
      <div        className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg group">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={zapsterLogo}
            alt="Zapsters Logo"
            className="w-12 h-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-black text-xl">
            Zapsters
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
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
                `transition-all duration-300 hover:text-purple-300 hover:scale-105 px-3 py-1.5 rounded-lg hover:bg-purple-500/10 ${
                  isActive ? "text-purple-300 bg-purple-500/10" : "text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden md:flex text-gray-700 hover:text-purple-600 hover:bg-purple-50"
          >
            <Link to="/internships">Join Program</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-4 shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
          >
            <Link to="/contact">Start Project</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
