
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Zagar from "./pages/Zagar";
import DepilyaciyaIndex from "./pages/depilyaciya/Index";
import DepilyaciyaVoskom from "./pages/depilyaciya/Voskom";
import DepilyaciyaBikini from "./pages/depilyaciya/Bikini";
import DepilyaciyaBoroda from "./pages/depilyaciya/Boroda";
import DepilyaciyaNogiRuki from "./pages/depilyaciya/NogiRuki";
import DepilyaciyaEkaterinburg from "./pages/depilyaciya/Ekaterinburg";
import BlogIndex from "./pages/blog/BlogIndex";
import ShugaringVsVosk from "./pages/blog/ShugaringVsVosk";
import MuzhskayaDepilyaciyaEkaterinburg from "./pages/blog/MuzhskayaDepilyaciyaEkaterinburg";
import PervayaDepilyaciyaVoskomMuzhchiny from "./pages/blog/PervayaDepilyaciyaVoskomMuzhchiny";
import VoskIliLazerMuzhchiny from "./pages/blog/VoskIliLazerMuzhchiny";
import OkantovkaBorodyVoskomEkaterinburg from "./pages/blog/OkantovkaBorodyVoskomEkaterinburg";
import MuzhskayaDepilyaciyaBikiniEkaterinburg from "./pages/blog/MuzhskayaDepilyaciyaBikiniEkaterinburg";
import DepilyaciyaSpinuGrudMuzhchinyEkb from "./pages/blog/DepilyaciyaSpinuGrudMuzhchinyEkb";
import DepilyaciyaNogRukMuzhchiny from "./pages/blog/DepilyaciyaNogRukMuzhchiny";
import AvtozagarMuzhchinyEkaterinburg from "./pages/blog/AvtozagarMuzhchinyEkaterinburg";
import Kontakty from "./pages/Kontakty";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/zagar/" element={<Zagar />} />
          <Route path="/depilyaciya/" element={<DepilyaciyaIndex />} />
          <Route path="/depilyaciya/voskom/" element={<DepilyaciyaVoskom />} />
          <Route path="/depilyaciya/bikini/" element={<DepilyaciyaBikini />} />
          <Route path="/depilyaciya/boroda/" element={<DepilyaciyaBoroda />} />
          <Route path="/depilyaciya/nogi-ruki/" element={<DepilyaciyaNogiRuki />} />
          <Route path="/depilyaciya/ekaterinburg/" element={<DepilyaciyaEkaterinburg />} />
          <Route path="/blog/" element={<BlogIndex />} />
          <Route path="/blog/shugaring-vs-vosk/" element={<ShugaringVsVosk />} />
          <Route path="/blog/muzhskaya-depilyaciya-ekaterinburg/" element={<MuzhskayaDepilyaciyaEkaterinburg />} />
          <Route path="/blog/pervaya-depilyaciya-voskom-muzhchiny/" element={<PervayaDepilyaciyaVoskomMuzhchiny />} />
          <Route path="/blog/vosk-ili-lazer-muzhchiny/" element={<VoskIliLazerMuzhchiny />} />
          <Route path="/blog/okantovka-borody-voskom-ekaterinburg/" element={<OkantovkaBorodyVoskomEkaterinburg />} />
          <Route path="/blog/muzhskaya-depilyaciya-bikini-ekaterinburg/" element={<MuzhskayaDepilyaciyaBikiniEkaterinburg />} />
          <Route path="/blog/depilyaciya-spinu-grud-muzhchiny-ekb/" element={<DepilyaciyaSpinuGrudMuzhchinyEkb />} />
          <Route path="/blog/depilyaciya-nog-ruk-muzhchiny/" element={<DepilyaciyaNogRukMuzhchiny />} />
          <Route path="/blog/avtozagar-muzhchiny-ekaterinburg/" element={<AvtozagarMuzhchinyEkaterinburg />} />
          <Route path="/kontakty/" element={<Kontakty />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
