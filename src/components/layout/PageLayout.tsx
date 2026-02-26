import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PageLayout;
