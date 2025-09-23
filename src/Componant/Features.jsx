import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaChalkboardTeacher, FaUsers, FaRocket } from "react-icons/fa";

function Features() {
  const featureCards = [
    {
      icon: FaProjectDiagram,
      title: "Real-World Projects",
      description: "Work on live projects with actual business impact.",
      stats: "500+ projects completed",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expert Mentorship",
      description: "Learn from industry veterans with 10+ years experience.",
      stats: "98% mentor satisfaction",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: FaUsers,
      title: "Professional Network",
      description: "Connect with peers, alumni, and industry leaders.",
      stats: "50+ partner companies",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: FaRocket,
      title: "Career Acceleration",
      description: "Get personalized career guidance and job placement help.",
      stats: "95% placement rate",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A program designed with real industry needs in mind — not just theory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:border-indigo-200 transition-all"
              >
                <div className={`p-4 mb-6 rounded-2xl bg-gradient-to-r ${card.color} text-white w-16 h-16 flex items-center justify-center`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <span className="text-sm font-semibold text-indigo-600">{card.stats}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
