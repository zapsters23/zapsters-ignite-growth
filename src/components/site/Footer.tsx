import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Github, Heart } from "lucide-react";
import zapsterLogo from "@/assets/zapsters_logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "/contact", label: "Email" },
  ];

  return (
    <footer className="border-t border-blue-100 mt-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={zapsterLogo}
                alt="Zapsters Logo"
                className="w-12 h-12 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              />
              <span className="font-black text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Zapsters
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Igniting digital excellence through innovative solutions and world-class training programs.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">Services</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Web Development
              </Link>
              <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                UI/UX Design
              </Link>
              <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Cybersecurity Consulting
              </Link>
              <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                CTF Development
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">Programs</h3>
            <div className="space-y-2">
              <Link to="/internships" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Internships
              </Link>
              <Link to="/events" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Workshops
              </Link>
              <Link to="/events" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Events
              </Link>
              <Link to="/team" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Our Team
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">Company</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
              <Link to="/projects" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
              <Link to="/team" className="block text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {year} Zapsters. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                Crafted with excellence
              </span>
              <Heart className="w-4 h-4 text-blue-500 fill-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
