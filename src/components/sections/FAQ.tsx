import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does it cost to move with Shailu Movers?",
    answer: "Our pricing depends on factors like distance, volume of items, and services required. We offer transparent pricing with no hidden charges. Request a free quote to get an accurate estimate based on your specific needs. Most local moves start from ₹3,000.",
  },
  {
    question: "Do you provide packing materials?",
    answer: "Yes! We provide high-quality packing materials including boxes, bubble wrap, packing paper, and specialized containers for fragile items. Our team brings all necessary materials on moving day. You can also opt for our full packing service where we handle everything.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer: "Absolutely. All moves come with basic insurance coverage of up to ₹5 lakhs at no extra cost. We also offer comprehensive insurance options for high-value items. Your peace of mind is our priority, and we handle everything with utmost care.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 7-10 days in advance, especially during peak seasons (end of month, summer). However, we understand emergencies happen and we do our best to accommodate last-minute bookings based on availability. Contact us anytime!",
  },
  {
    question: "Do you move on weekends and holidays?",
    answer: "Yes, we operate 7 days a week including weekends and most holidays. We understand that your schedule may require flexibility, so we're here when you need us. Weekend slots tend to fill up quickly, so early booking is recommended.",
  },
  {
    question: "What areas do you cover?",
    answer: "We serve all major cities and towns across Maharashtra, including Mumbai, Pune, Nagpur, Nashik, and surrounding areas. We also handle long-distance moves to other states. Check our Service Areas page or contact us to confirm coverage for your specific location.",
  },
  {
    question: "How long does a typical move take?",
    answer: "A standard 2-3 BHK local move typically takes 4-6 hours including packing, loading, transit, and unloading. Long-distance moves vary based on distance. We provide estimated timelines during your quote consultation and keep you updated throughout the process.",
  },
  {
    question: "What if something gets damaged during the move?",
    answer: "While we take extreme care, if something does get damaged, our insurance covers it. Simply report any damage within 24 hours of delivery. We'll assess the claim and process compensation as per our insurance policy. Our claim resolution rate is 100%.",
  },
  {
    question: "Can I track my belongings during transit?",
    answer: "Yes! For long-distance moves, we provide real-time tracking updates. You'll receive regular status updates via WhatsApp and can call our 24/7 support line anytime to check on your move's progress. Transparency is part of our service commitment.",
  },
  {
    question: "Do you help with unpacking and furniture assembly?",
    answer: "Absolutely! Our service includes unloading and placing items in designated rooms. We also offer unpacking services and furniture assembly/disassembly as add-on options. Just let us know your requirements when booking, and we'll take care of it.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            Got questions? We've got answers. Find everything you need to know about our moving services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-brand-cream border-2 border-gray-100 rounded-xl px-6 hover:border-brand-orange transition-colors duration-300"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl font-semibold text-brand-navy hover:text-brand-orange py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-gray-700 text-base md:text-lg leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-brand-teal/10 to-brand-orange/10 rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto border-2 border-brand-teal/20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Still Have Questions?
          </h3>
          <p className="font-body text-lg text-gray-600 mb-4">
            Our team is here to help 24/7. Get in touch and we'll answer all your queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
              onClick={() => window.location.href = "tel:+919876543210"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </button>
            <button
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
              onClick={() => window.open('https://wa.me/919876543210?text=Hi,%20I%20have%20some%20questions%20about%20your%20services', '_blank')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
