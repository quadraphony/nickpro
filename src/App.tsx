import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster richColors position="top-right" />
      <Preloader />
      <BrowserRouter>
        <Navigation />
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center pt-16">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-10 h-10 rounded-full border-2 border-t-transparent border-primary animate-spin" />
                <p className="text-sm text-muted-foreground">Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <main className="min-h-screen pt-16 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black text-gradient mb-4">404</div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h2>
                    <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
                    <a href="/" className="px-8 py-3 rounded-full text-white font-semibold"
                      style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}>
                      Back to Home
                    </a>
                  </div>
                </main>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
