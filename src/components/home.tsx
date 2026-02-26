import Header from "./layout/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import ProcessTimeline from "./sections/ProcessTimeline";
import About from "./sections/About";

import ServiceAreas from "./sections/ServiceAreas";
import FAQ from "./sections/FAQ";
import QuoteForm from "./sections/QuoteForm";
import Testimonials from "./sections/Testimonials";
import Footer from "./layout/Footer";
import WhatsAppButton from "./common/WhatsAppButton";

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline />
      <About />
      <div className="bg-gradient-to-br from-brand-navy via-[#1e3a5f] to-brand-navy">
        <Testimonials />
      </div>
      <ServiceAreas />
      <FAQ />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Home
