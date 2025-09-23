// src/Pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import Divider from "../Componant/Divider";
import ContactForm from "../Componant/ContactForm";

function Contact() {
  return (
    <>
      <Divider flip color="#ffffff" height="80" />
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Contact <span className="text-yellow-300">Us</span>
        </motion.h2>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div className="space-y-6 text-white">
            <h3 className="text-3xl font-bold">Let’s talk about</h3>
            <h4 className="text-2xl font-semibold text-indigo-100">
              Love to hear from you!
            </h4>
            <p className="text-indigo-200">
              Reach out to us for collaborations, queries, or just to say hello.
            </p>

            <div className="space-y-4">
              <p>
                <strong>📍 Our Location:</strong> Nagpur - 440015, Maharashtra, India
              </p>
              <p>
                <strong>📞 Phone:</strong> +91 9112387807
              </p>
              <p>
                <strong>📧 Email:</strong> contact@classstack.com
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <Divider color="#f9fafb" height="80" />
    </>
  );
}

export default Contact;
