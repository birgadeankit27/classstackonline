


import React from "react";
import ProgrammingImage from "../assets/Programming-rafiki.svg";

function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bridging the Gap Between{" "}
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Academia & Industry
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We connect students with real-world opportunities, expert mentorship, 
            and hands-on projects that prepare them for the careers of tomorrow.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={ProgrammingImage}
            alt="Students collaborating"
            className="w-full h-auto rounded-2xl shadow-lg"
            loading="lazy"   // ✅ makes image load faster
          />
        </div>

      </div>
    </section>
  );
}

export default AboutSection;

