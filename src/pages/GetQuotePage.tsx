import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/common/PageHero";
import QuoteForm from "@/components/sections/QuoteForm";

const GetQuotePage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Get Your Free Quote"
        subtitle="Fill out the form below and receive a personalized quote within 30 minutes. No hidden charges, no obligations."
        breadcrumb="Get Quote"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
        showCTA={false}
      />
      <QuoteForm />
    </PageLayout>
  );
};

export default GetQuotePage;
