import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-gray-800"
        onClick={() => setOpen(!open)}
      >
        {question}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            className="mt-3 text-gray-600"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FAQItem;
