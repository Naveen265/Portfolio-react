import React from "react";
import { Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-600/30 shadow-2xl">
            <img
              src="/naan.png"
              alt="Naveen John"
              className="w-full h-full object-cover"
            />
          </div>
        </div>  

        {/* Text Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Naveen John
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 font-medium">
            Full Stack Developer
          </p>

          <p
            className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            style={{ textAlign: "left" }}
          >
            Welcome to my portfolio! I'm a passionate full stack developer with
            a Master's in Computer Application. I specialize in building robust
            and scalable web applications using React and Node.js, creating
            responsive, dynamic, and feature-rich solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
            <button
              disabled={true}
              title="I’m not sharing my resume at the moment. Thanks for understanding! Feel free to reach out instead."
            >
              <a
                // href="/Naveen's_resume.pdf"
                style={{ cursor: "pointer" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-md shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-300 font-medium rounded-md hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <ArrowDown size={28} />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
