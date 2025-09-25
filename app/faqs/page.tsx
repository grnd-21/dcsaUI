import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
   // Admissions & Enrollment
  {
    question: "What are the admission requirements?",
    answer: "Requirements include application form, school card, birth certificate (NSO/PSA), and ID photos. Full details are in the Enroll section.",
  },
  {
    question: "How do I apply for admission?",
    answer: "Click the Apply Today button or go to the Enroll tab.",
  },
  {
    question: "How do I start my application?",
    answer: "Click Apply Now on the Home page and fill out the online application form.",
    isExpanded: true,
  },
  {
    question: "Do you accept online enrollment?",
    answer: "Yes, applications can be submitted through the Enroll page.",
  },
  // Courses & Programs
  {
    question: "Where can I see the list of courses offered?",
    answer: "Go to the Academics page for all College and Senior High School programs.",
  },
  // Branches
  {
    question: "How do I find the nearest branch?",
    answer: "Open the Branches tab to see all campus locations.",
  },
  {
    question: "Do branches offer the same programs?",
    answer: "Most branches offer similar programs, but availability may vary. Check each branch page for details.",
  },
  {
    question: "How do I contact a specific branch?",
    answer: "Branch phone numbers and emails are listed under the Branches / Contact Us page.",
  },
  // Contact & Office Hours
  {
    question: "How can I contact the school?",
    answer: "Visit the Contact Us page for emails, phone numbers, and addresses.",
  },
  {
    question: "What are the office hours?",
    answer: "Offices are open Monday to Friday, 8:00 AM – 5:00 PM (except holidays).",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen gradient-bg animate-fade-in">
      {/* Navbar Section */}
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Find answers to common questions about our event, tickets, and
              experience.
            </p>
          </div>

          {/* Accordion FAQ */}
          <Accordion
            type="single"
            collapsible
            className="w-full"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="transition-colors duration-200 hover:bg-accent/30"
                data-aos="fade-up"
                data-aos-delay={150 + index * 50}
                data-aos-duration="700"
              >
                <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline no-underline transition-colors duration-200 hover:text-[#800000]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
