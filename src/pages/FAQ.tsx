import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our menu, selecting the items you want, adding them to your cart, and proceeding to checkout. You'll need to provide your delivery address and payment information to complete the order."
    },
    {
      question: "What are your delivery hours?",
      answer: "We deliver from 10:00 AM to 10:00 PM daily. Orders can be placed at any time, but deliveries will only be made during these hours."
    },
    {
      question: "How long does delivery take?",
      answer: "Typical delivery times range from 30-45 minutes, depending on your location and current order volume. You can track your order in real-time through our app."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery. All online payments are processed securely."
    },
    {
      question: "Do you have a minimum order value?",
      answer: "Yes, our minimum order value is Rp. 50.000. This helps us ensure efficient delivery operations."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
              <AccordionTrigger className="px-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;