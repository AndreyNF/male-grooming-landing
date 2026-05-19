
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Zagar from "./pages/Zagar";
import DepilyaciyaIndex from "./pages/depilyaciya/Index";
import DepilyaciyaVoskom from "./pages/depilyaciya/Voskom";
import DepilyaciyaBikini from "./pages/depilyaciya/Bikini";
import DepilyaciyaBoroda from "./pages/depilyaciya/Boroda";
import DepilyaciyaNogiRuki from "./pages/depilyaciya/NogiRuki";
import DepilyaciyaEkaterinburg from "./pages/depilyaciya/Ekaterinburg";
import ShugaringVsVosk from "./pages/blog/ShugaringVsVosk";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/zagar/" element={<Zagar />} />
          <Route path="/depilyaciya/" element={<DepilyaciyaIndex />} />
          <Route path="/depilyaciya/voskom/" element={<DepilyaciyaVoskom />} />
          <Route path="/depilyaciya/bikini/" element={<DepilyaciyaBikini />} />
          <Route path="/depilyaciya/boroda/" element={<DepilyaciyaBoroda />} />
          <Route path="/depilyaciya/nogi-ruki/" element={<DepilyaciyaNogiRuki />} />
          <Route path="/depilyaciya/ekaterinburg/" element={<DepilyaciyaEkaterinburg />} />
          <Route path="/blog/shugaring-vs-vosk/" element={<ShugaringVsVosk />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;