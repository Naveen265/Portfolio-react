import React from "react";
import { Download, ArrowDown, Zap, Flag } from "lucide-react";
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
          section: 'bg-gradient-to-br from-white via-gray-50 to-white',
          text: 'text-gray-900',
          subtext: 'text-orange-600',
          description: 'text-gray-700',
          button: 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600',
          buttonSecondary: 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white',
          arrow: 'text-orange-600 hover:text-orange-700'
        };
      case 'special':
        return {
          section: 'bg-gradient-to-br from-black via-red-950/30 to-black',
          text: 'text-white',
          subtext: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500',
          description: 'text-gray-300',
          button: 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700',
          buttonSecondary: 'border-red-500 text-red-500 hover:bg-red-600 hover:text-white',
          arrow: 'text-red-500 hover:text-red-400'
        };
      default:
        return {
          section: 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900',
          text: 'text-white',
          subtext: 'text-orange-400',
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
      className={`relative min-h-screen flex items-center justify-center ${themeClasses.section} px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      {/* F1 Theme Elements - Only for Special Theme */}
      {theme === 'special' && (
        <>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform -skew-y-1"></div>
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform skew-y-1"></div>
          </div>
          <div className="absolute top-10 right-10 opacity-10">
            <Flag className="w-12 h-12 text-red-500" />
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
              <img
                src="/myself.jpg"
                alt="Naveen John"
                className="w-full h-full object-cover"
              />
            </div>
            {theme === 'special' && (
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-3 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {theme === 'special' && (
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-2xl px-4 py-2 rounded-lg shadow-lg">
                #1
              </div>
              <Flag className="w-8 h-8 text-red-500" />
            </div>
          )}

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

          {/* Racing-Inspired CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 ${themeClasses.button}`}
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

          {theme === 'special' && (
            <div className="flex items-center gap-4 pt-4 opacity-70">
              <div className="text-sm font-mono">
                <span className="text-gray-400">Response Time: </span>
                <span className="text-green-400 font-bold">0.001s</span>
              </div>
            </div>
          )}
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