import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SiteLayout from "@/components/layout/SiteLayout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Internships from "./pages/Internships";
import Services from "./pages/Services";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/services" element={<Services />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES FUCK ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
