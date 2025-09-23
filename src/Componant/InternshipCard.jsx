// src/Componant/InternshipCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function InternshipCard({ title, topics = [], formLink, icon }) {
  return (
    <motion.a
      href={formLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      className="block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all p-8"
    >
      {/* Icon + Title */}
      <div className="flex items-center justify-center mb-6">
        {icon && <span className="text-4xl mr-3">{icon}</span>}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>

      {/* Topics */}
      <ul className="space-y-3 mb-8 text-left">
        {topics.map((topic, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
          >
            <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">{topic}</span>
          </li>
        ))}
      </ul>

      {/* Apply Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:shadow-lg transition"
      >
        Apply Now
      </motion.button>
    </motion.a>
  );
}

export default InternshipCard;
