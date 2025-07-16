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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/random-font" component={RandomFont} />
      <Route path="/compare-fonts" component={CompareFonts} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
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
