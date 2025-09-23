// src/Componant/ContactForm.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {submitStatus === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FaPaperPlane className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-green-800">Message Sent!</h3>
          <p className="text-green-700">We’ll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 text-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 text-gray-900"
            required
          />
          <textarea
            name="message"
            placeholder="Message*"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 text-gray-900"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
          >
            {isSubmitting ? "Sending..." : <> <FaPaperPlane /> Send Message</>}
          </motion.button>
        </form>
      )}
    </AnimatePresence>
  );
}

export default ContactForm;
