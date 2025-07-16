import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toast } from "@/components/toast";
import Home from "@/pages/home";
import RandomFont from "@/pages/random-font";
import CompareFonts from "@/pages/compare-fonts";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import FancyFontsPage from "@/pages/category/FancyFontsPage";
import VersatileFontsPage from "@/pages/category/VersatileFontsPage";
import CoolFontsPage from "@/pages/category/CoolFontsPage";
import LinedFontsPage from "@/pages/category/LinedFontsPage";
import GamingFontsPage from "@/pages/category/GamingFontsPage";
import DecoratedFontsPage from "@/pages/category/DecoratedFontsPage";
import MixedRandomStylesPage from "@/pages/category/MixedRandomStylesPage";
import CuteFontsPage from "@/pages/category/CuteFontsPage";
import BoldFontsPage from "@/pages/category/BoldFontsPage";
import ItalicFontsPage from "@/pages/category/ItalicFontsPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/random-font" component={RandomFont} />
      <Route path="/compare-fonts" component={CompareFonts} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/fancy-fonts" component={FancyFontsPage} />
      <Route path="/versatile-fonts" component={VersatileFontsPage} />
      <Route path="/cool-fonts" component={CoolFontsPage} />
      <Route path="/lined-fonts" component={LinedFontsPage} />
      <Route path="/gaming-fonts" component={GamingFontsPage} />
      <Route path="/decorated-fonts" component={DecoratedFontsPage} />
      <Route path="/mixed-random-styles" component={MixedRandomStylesPage} />
      <Route path="/cute-fonts" component={CuteFontsPage} />
      <Route path="/bold-fonts" component={BoldFontsPage} />
      <Route path="/italic-fonts" component={ItalicFontsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toast />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
