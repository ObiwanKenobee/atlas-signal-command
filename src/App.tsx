import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { WorkspaceLayout } from "@/components/layout/WorkspaceLayout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import Insights from "./pages/Insights";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PortalDashboard from "./pages/portal/Dashboard";
import PortalProjects from "./pages/portal/Projects";
import PortalReports from "./pages/portal/Reports";
import PortalRecommendations from "./pages/portal/Recommendations";
import PortalSimulations from "./pages/portal/Simulations";
import CommandCenter from "./pages/workspace/CommandCenter";
import WorkspaceLeads from "./pages/workspace/Leads";
import WorkspaceResearch from "./pages/workspace/Research";
import CommunitySignals from "./pages/community/Signals";
import SubmitSignal from "./pages/community/SubmitSignal";
import CommunityStories from "./pages/community/Stories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              {/* Community (public) */}
              <Route path="/community/signals" element={<CommunitySignals />} />
              <Route path="/community/submit" element={<SubmitSignal />} />
              <Route path="/community/stories" element={<CommunityStories />} />
            </Route>
            {/* Client Portal */}
            <Route element={<PortalLayout />}>
              <Route path="/portal/dashboard" element={<PortalDashboard />} />
              <Route path="/portal/projects" element={<PortalProjects />} />
              <Route path="/portal/reports" element={<PortalReports />} />
              <Route path="/portal/recommendations" element={<PortalRecommendations />} />
              <Route path="/portal/simulations" element={<PortalSimulations />} />
            </Route>
            {/* Internal Workspace */}
            <Route element={<WorkspaceLayout />}>
              <Route path="/workspace/command-center" element={<CommandCenter />} />
              <Route path="/workspace/leads" element={<WorkspaceLeads />} />
              <Route path="/workspace/research" element={<WorkspaceResearch />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
