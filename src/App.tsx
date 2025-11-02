import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { Sidebar } from "./components/Sidebar";
import Index from "./pages/Index";
import Expenses from "./pages/Expenses";
import Budgets from "./pages/Budgets";
import Categories from "./pages/Categories";
import Analytics from "./pages/Analytics";
import Calculator from "./pages/Calculator";
import Settings from "./pages/Settings";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 lg:ml-64">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/budgets" element={<Budgets />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
