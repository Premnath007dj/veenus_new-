import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';
import TechZone from './pages/TechZone';
import Careers from './pages/Careers';

const Routes = () => {
  return (
    <BrowserRouter basename="/veenus_new-">
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/why-choose-us" element={<WhyChooseUsPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/tech-zone" element={<TechZone />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;