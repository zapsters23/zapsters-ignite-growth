import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import zapsterLogo from "@/assets/zapsters_logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-indigo-900/50 mt-20 bg-black/30 backdrop-blur-xl">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={zapsterLogo} alt="Zapsters Logo" className="w-8 h-8" />
              <span className="font-black text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Zapsters</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium tech solutions and world-class internship programs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-200">Services</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-400 hover:text-indigo-400 transition-colors">Web Development</Link>
              <Link to="/services" className="block text-gray-400 hover:text-indigo-400 transition-colors">UI/UX Design</Link>
              <Link to="/services" className="block text-gray-400 hover:text-indigo-400 transition-colors">AI/ML Solutions</Link>
              <Link to="/services" className="block text-gray-400 hover:text-indigo-400 transition-colors">Cybersecurity</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-200">Programs</h3>
            <div className="space-y-2">
              <Link to="/internships" className="block text-gray-400 hover:text-indigo-400 transition-colors">Internships</Link>
              <Link to="/team" className="block text-gray-400 hover:text-indigo-400 transition-colors">Our Team</Link>
              <Link to="/events" className="block text-gray-400 hover:text-indigo-400 transition-colors">Events</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-200">Company</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-400 hover:text-indigo-400 transition-colors">Contact</Link>
              <Link to="/projects" className="block text-gray-400 hover:text-indigo-400 transition-colors">Portfolio</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-indigo-900/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {year} Zapsters. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold">Proudly made by Zapsters</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
