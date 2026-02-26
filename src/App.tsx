import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

// Service Pages
const HomeShiftingPage = lazy(() => import("./pages/HomeShiftingPage"));
const OfficeRelocationPage = lazy(() => import("./pages/OfficeRelocationPage"));
const PackingServicesPage = lazy(() => import("./pages/PackingServicesPage"));
const LocalTransportPage = lazy(() => import("./pages/LocalTransportPage"));
const LoadingUnloadingPage = lazy(() => import("./pages/LoadingUnloadingPage"));
const StorageSolutionsPage = lazy(() => import("./pages/StorageSolutionsPage"));

// Info Pages
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const OurServicesPage = lazy(() => import("./pages/OurServicesPage"));
const ServiceAreasPage = lazy(() => import("./pages/ServiceAreasPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const GetQuotePage = lazy(() => import("./pages/GetQuotePage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" /></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Service Pages */}
        <Route path="/home-shifting" element={<HomeShiftingPage />} />
        <Route path="/office-relocation" element={<OfficeRelocationPage />} />
        <Route path="/packing-services" element={<PackingServicesPage />} />
        <Route path="/local-transport" element={<LocalTransportPage />} />
        <Route path="/loading-unloading" element={<LoadingUnloadingPage />} />
        <Route path="/storage-solutions" element={<StorageSolutionsPage />} />
        {/* Info Pages */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<OurServicesPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
