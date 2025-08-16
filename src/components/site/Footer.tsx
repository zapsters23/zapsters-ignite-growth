import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/20 mt-20 bg-white/10 backdrop-blur-xl">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">Z</span>
              </div>
              <span className="font-black text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Zapsters</span>
            </div>
            <p className="text-black/70 leading-relaxed">
              Premium tech solutions and world-class internship programs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Services</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-black/60 hover:text-purple-600 transition-colors">Web Development</Link>
              <Link to="/services" className="block text-black/60 hover:text-purple-600 transition-colors">UI/UX Design</Link>
              <Link to="/services" className="block text-black/60 hover:text-purple-600 transition-colors">AI/ML Solutions</Link>
              <Link to="/services" className="block text-black/60 hover:text-purple-600 transition-colors">Cybersecurity</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Programs</h3>
            <div className="space-y-2">
              <Link to="/internships" className="block text-black/60 hover:text-purple-600 transition-colors">Internships</Link>
              <Link to="/team" className="block text-black/60 hover:text-purple-600 transition-colors">Our Team</Link>
              <Link to="/events" className="block text-black/60 hover:text-purple-600 transition-colors">Events</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Company</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-black/60 hover:text-purple-600 transition-colors">Contact</Link>
              <Link to="/projects" className="block text-black/60 hover:text-purple-600 transition-colors">Portfolio</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-black/60">© {year} Zapsters. All rights reserved.</p>
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
