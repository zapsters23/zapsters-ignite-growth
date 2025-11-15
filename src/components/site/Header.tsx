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
             className="w-12 h-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
           />
           <span className="text-white font-black text-xl">
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
                 `transition-all duration-300 hover:text-white hover:scale-105 px-3 py-1.5 rounded-lg hover:bg-white/10 ${
                   isActive ? "text-white bg-white/10" : "text-gray-300"
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
             className="hidden md:flex text-gray-300 hover:text-white hover:bg-white/10"
           >
             <Link to="/internships">Join Program</Link>
           </Button>
           <Button
             asChild
             size="sm"
             className="bg-white text-black hover:bg-gray-100 px-4 shadow-lg hover:scale-105 transition-all duration-300"
           >
             <Link to="/contact">Start Project</Link>
           </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
