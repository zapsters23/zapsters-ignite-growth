import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-violet-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-white/70 mb-4">Oops! Page not found</p>
        <a href="/" className="text-purple-500 hover:text-purple-400 transition-colors">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
