import React from 'react';
import { motion } from 'framer-motion';
import Divider from '../Componant/Divider';
import FAQItem from '../Componant/FAQItem';

function FAQs() {
  const faqs = [
    { q: "What is the duration of Internship?", a: "All our internships are for a period of 1 month only." },
    { q: "What is the criteria for selection?", a: "Determination to learn and grow is all what is needed." },
    { q: "Can I complete multiple tracks together?", a: "We believe to provide an actual learning environment, we have limited our internship offerings to 1 track per month for each student. This allows students to explore the chosen track in-depth and get quality results." },
    { q: "When does the internships starts?", a: "Each batch starts at the start or mid of the month and ends on start or mid of next month respectively." },
    { q: "Is there any fees for the internship?", a: "The internship is completely free. However, a documentation fee of ₹99 must be paid to cover the processing charges." },
    { q: "Is the internship Offline or Online?", a: "All our internships are conducted in Virtual mode (Online)." },
    { q: "When will I receive the Offer Letter?", a: "We process the Offer Letters at the mid & end of month in batches. We request you to please wait in the mean time. If you have received the Task Submission Email, we request you to review your spam folder for the Offer Letter. Kindly contact us via email if you are unable to find it." },
    { q: "CIN is showing Invalid", a: "The CIN will activate once you have been issued your Certificate of Completion." },
    { q: "When will I get the Certificate?", a: "The Certificate of Completion is sent after the end date on the Offer Letter. For batches starting on the 1st of the month, the Certificate is sent from 1st of next month. For batches starting on the 15th of the month, the Certificate is sent from 16th of next month. Note: New Submission may take upto 3 days to process." },
    { q: "How to submit Tasks?", a: "A Submission Form will be mailed to you 10-15 days after you receive your Offer Letter. For batches starting on the 1st of the month, the form will be mailed between the 11th and 14th. For batches starting on the 15th of the month, the form will be mailed between the 26th and 29th." }
  ];

  return (
    <>
      <Divider flip color="#ffffff" />
      <section className="py-20 px-6 bg-gray-50">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((f, idx) => (
            <FAQItem key={idx} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>
      <Divider color="#ffffff" />
    </>
  );
}

export default FAQs;
