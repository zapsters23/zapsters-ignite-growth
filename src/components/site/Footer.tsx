import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-20 glass">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">Z</span>
              </div>
              <span className="font-black text-xl bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Zapsters</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium tech solutions and world-class internship programs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <Link to="/projects" className="block text-muted-foreground hover:text-primary transition-colors">Web Development</Link>
              <Link to="/projects" className="block text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link>
              <Link to="/projects" className="block text-muted-foreground hover:text-primary transition-colors">AI/ML Solutions</Link>
              <Link to="/projects" className="block text-muted-foreground hover:text-primary transition-colors">Cybersecurity</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Programs</h3>
            <div className="space-y-2">
              <Link to="/internships" className="block text-muted-foreground hover:text-primary transition-colors">Internships</Link>
              <Link to="/team" className="block text-muted-foreground hover:text-primary transition-colors">Our Team</Link>
              <Link to="/team" className="block text-muted-foreground hover:text-primary transition-colors">Events</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/projects" className="block text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© {year} Zapsters. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent font-semibold">Proudly made by Zapsters</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
