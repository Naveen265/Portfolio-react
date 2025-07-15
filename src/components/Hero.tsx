import React from "react";
import { Download, ArrowDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          section: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
          text: 'text-gray-900',
          subtext: 'text-gray-600',
          description: 'text-gray-700',
          button: 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600',
          buttonSecondary: 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white',
          arrow: 'text-gray-600 hover:text-gray-800'
        };
      case 'special':
        return {
          section: 'bg-gradient-to-br from-black via-red-950/20 to-black racing-bg',
          text: 'text-white',
          subtext: 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400',
          description: 'text-gray-300',
          button: 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 special-glow',
          buttonSecondary: 'border-red-400 text-red-400 hover:bg-red-600 hover:text-white special-border',
          arrow: 'text-red-400 hover:text-red-300'
        };
      default:
        return {
          section: 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900',
          text: 'text-white',
          subtext: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500',
          description: 'text-gray-300',
          button: 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105',
          buttonSecondary: 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900',
          arrow: 'text-gray-400 hover:text-gray-200'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center ${themeClasses.section} px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-600/30 shadow-2xl">
            <img
              src="/myself.jpg"
              alt="Naveen John"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold ${themeClasses.text} leading-tight`}>
            Hi, I'm{" "}
            <span className={themeClasses.subtext}>
              Naveen John
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl ${themeClasses.subtext} font-medium`}>
            Full Stack Developer
          </p>

          <p
            className={`${themeClasses.description} text-lg leading-relaxed max-w-2xl`}
            style={{ textAlign: "left" }}
          >
            Welcome to my portfolio! I'm a passionate full stack developer with
            a Master's in Computer Application. I specialize in building robust
            and scalable web applications using React and Node.js, creating
            responsive, dynamic, and feature-rich solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-lg transition-all duration-300 ${themeClasses.button}`}
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className={`inline-flex items-center gap-2 px-6 py-3 border-2 font-medium rounded-md transition-all duration-300 ${themeClasses.buttonSecondary}`}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("skills")}
            className={`transition-colors duration-300 ${themeClasses.arrow}`}
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
