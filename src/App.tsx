import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import BoatEngines from "./pages/BoatEngines";
import TDPower from "./pages/products/TDPower";
import HyundaiSeasAll from "./pages/products/HyundaiSeasAll";
import Aquamot from "./pages/products/Aquamot";
import EverunWheelLoaders from "./pages/EverunWheelLoaders";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/produkter" element={<Products />} />
              <Route path="/produkt/:productId" element={<ProductDetail />} />
              <Route path="/batmotorer" element={<BoatEngines />} />
              <Route path="/produkter/td-power" element={<TDPower />} />
              <Route path="/produkter/hyundai-seasall" element={<HyundaiSeasAll />} />
              <Route path="/produkter/aquamot" element={<Aquamot />} />
              <Route path="/everun-hjullastere" element={<EverunWheelLoaders />} />
              <Route path="/priser" element={<Prices />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
