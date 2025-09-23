import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/classstcklogo.png"; // ✅ your PNG logo

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const lightPages = ["/internships", "/about", "/faqs", "/contact"];

      if (lightPages.includes(location.pathname)) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Internships", href: "/internships" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center px-6 py-3">
        {/* Logo + Brand pinned left */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ClassStack" className="h-10 w-10 object-contain" />
          <span
            className={`text-xl md:text-2xl font-extrabold tracking-tight ${
              scrolled
                ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600"
                : "text-white"
            }`}
          >
            ClassStack
          </span>
        </Link>

        {/* Desktop Navigation aligned right */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative font-medium text-base transition-colors duration-200 ${
                scrolled
                  ? location.pathname === item.href
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                  : location.pathname === item.href
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-indigo-600 to-pink-600 scale-x-0 origin-left transition-transform duration-300 ${
                  location.pathname === item.href ? "scale-x-100" : "hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${scrolled ? "text-gray-700" : "text-white"} md:hidden p-2`}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium text-lg ${
                    location.pathname === item.href ? "text-indigo-600" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
