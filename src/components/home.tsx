import Header from "./layout/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import ProcessTimeline from "./sections/ProcessTimeline";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import ServiceAreas from "./sections/ServiceAreas";
import FAQ from "./sections/FAQ";
import QuoteForm from "./sections/QuoteForm";
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
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Home
