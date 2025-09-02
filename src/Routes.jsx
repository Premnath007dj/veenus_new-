import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ElectricMotorDesignServicesLandingPage from './pages/electric-motor-design-services-landing-page';
import TechZone from './pages/TechZone';
import Careers from './pages/Careers';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ElectricMotorDesignServicesLandingPage />} />
        <Route path="/veenus-nova" element={<ElectricMotorDesignServicesLandingPage />} />
        <Route path="/tech-zone" element={<TechZone />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
