// src/Pages/Internships.jsx
import React from "react";
import InternshipCard from "../Componant/InternshipCard";
import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import { SiPython } from "react-icons/si";
import { FaReact, FaAngular } from "react-icons/fa";

function Internships() {
  const entryId = "entry.123456789"; // Replace with your Google Form field ID
  const formBase =
    "https://docs.google.com/forms/d/e/1FAIpQLScdE2n4fcAB2TyXOeDiqcBi6HaMcE4ara0XX7uqn1X_TCnIMw/viewform?usp=pp_url";

  const internships = [
    {
      title: "Java Development",
      topics: [
        "Core Java & OOPs",
        "Spring Boot & REST APIs",
        "Hibernate & JPA",
        "Database Integration",
        "Mini Project: Employee System",
      ],
      formLink: `${formBase}&${entryId}=Java+Development`,
      icon: <DiJava className="text-orange-600" />,
    },
    {
      title: "Python Development",
      topics: [
        "Core Python & OOPs",
        "Flask/Django Basics",
        "REST APIs & Database",
        "Automation Scripts",
        "Mini Project: API Service",
      ],
      formLink: `${formBase}&${entryId}=Python+Development`,
      icon: <SiPython className="text-green-600" />,
    },
    {
      title: "React Development",
      topics: [
        "JSX & Components",
        "State & Props",
        "React Router",
        "API Integration",
        "Mini Project: E-Commerce UI",
      ],
      formLink: `${formBase}&${entryId}=React+Development`,
      icon: <FaReact className="text-blue-500" />,
    },
    {
      title: "Angular Development",
      topics: [
        "Components & Modules",
        "Routing & Forms",
        "Services & Dependency Injection",
        "REST API Integration",
        "Mini Project: Admin Dashboard",
      ],
      formLink: `${formBase}&${entryId}=Angular+Development`,
      icon: <FaAngular className="text-red-600" />,
    },
    {
      title: "Java + React Development",
      topics: [
        "Spring Boot Backend",
        "REST APIs",
        "React Frontend",
        "Database Integration",
        "Mini Project: Full Stack App",
      ],
      formLink: `${formBase}&${entryId}=Java+React+Development`,
      icon: (
        <span className="flex gap-2">
          <DiJava className="text-orange-600" />
          <FaReact className="text-blue-500" />
        </span>
      ),
    },
    {
      title: "Java + Angular Development",
      topics: [
        "Spring Boot Backend",
        "REST APIs",
        "Angular Frontend",
        "JWT Authentication",
        "Mini Project: Enterprise App",
      ],
      formLink: `${formBase}&${entryId}=Java+Angular+Development`,
      icon: (
        <span className="flex gap-2">
          <DiJava className="text-orange-600" />
          <FaAngular className="text-red-600" />
        </span>
      ),
    },
    {
      title: "Python + React Development",
      topics: [
        "Flask/Django Backend",
        "REST APIs",
        "React Frontend",
        "Database Integration",
        "Mini Project: Blog App",
      ],
      formLink: `${formBase}&${entryId}=Python+React+Development`,
      icon: (
        <span className="flex gap-2">
          <SiPython className="text-green-600" />
          <FaReact className="text-blue-500" />
        </span>
      ),
    },
    {
      title: "Python + Angular Development",
      topics: [
        "Flask/Django Backend",
        "REST APIs",
        "Angular Frontend",
        "Authentication & Authorization",
        "Mini Project: CRM System",
      ],
      formLink: `${formBase}&${entryId}=Python+Angular+Development`,
      icon: (
        <span className="flex gap-2">
          <SiPython className="text-green-600" />
          <FaAngular className="text-red-600" />
        </span>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-6 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 mb-6">
          🚀 Explore Opportunities
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-indigo-600">Internships</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose from a wide range of programs designed to give you{" "}
          <span className="font-semibold text-indigo-600">hands-on experience</span>{" "}
          and help you become industry-ready.
        </p>
      </motion.div>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {internships.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InternshipCard
              title={i.title}
              topics={i.topics}
              formLink={i.formLink}
              icon={i.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Internships;
