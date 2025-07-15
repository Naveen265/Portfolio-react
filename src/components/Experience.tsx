import React from 'react';
import { MapPin, Calendar, ChevronRight, Film, Camera, Clapperboard, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      company: 'Avasoft',
      position: 'Software Engineer',
      duration: 'Feb 2023 - Present',
      location: 'Remote',
      responsibilities: [
        'Redesigned and enhanced an employee management system by fixing critical bugs and adding new features, improving system stability and user experience',
        'Developed and integrated a reporting module with data visualizations and PDF export capability to streamline business reporting',
        'Collaborated with a leading U.S.-based client team to refactor a complex payment workflow, significantly reducing load times and improving maintainability',
        'Worked across the full stack (MERN) to build scalable web applications, ensuring adherence to best practices and coding standards',
        'Conducted code reviews, contributed to architectural discussions, and documented processes to ensure consistent development workflows',
        'Mentored junior developers by reviewing code, offering guidance, and sharing knowledge of frontend and backend technologies'
      ]
    }
  ];

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          section: 'bg-gradient-to-br from-white via-amber-50 to-white',
          title: 'text-gray-900',
          subtitle: 'text-gray-700',
          card: 'bg-white border-amber-200 shadow-lg hover:border-amber-400',
          position: 'text-gray-900',
          company: 'text-amber-600',
          meta: 'text-gray-600',
          text: 'text-gray-600',
          timeline: 'bg-amber-500',
          cinemaElement: 'text-amber-600'
        };
      case 'special':
        return {
          section: 'bg-gradient-to-br from-slate-900 via-amber-900/10 to-slate-800',
          title: 'text-white',
          subtitle: 'text-gray-400',
          card: 'bg-slate-800 border-amber-500/30 shadow-xl hover:border-amber-400',
          position: 'text-white',
          company: 'text-amber-400',
          meta: 'text-gray-400',
          text: 'text-gray-300',
          timeline: 'bg-amber-500',
          cinemaElement: 'text-amber-400'
        };
      default:
        return {
          section: 'bg-gradient-to-br from-slate-900 via-amber-900/10 to-slate-800',
          title: 'text-white',
          subtitle: 'text-gray-400',
          card: 'bg-slate-800 border-amber-500/30 shadow-xl hover:border-amber-400',
          position: 'text-white',
          company: 'text-amber-400',
          meta: 'text-gray-400',
          text: 'text-gray-300',
          timeline: 'bg-amber-500',
          cinemaElement: 'text-amber-400'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <section id="experience" className={`py-24 ${themeClasses.section} relative overflow-hidden`}>
      {/* Cinema Elements */}
      {theme === 'special' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10">
            <Film className="w-12 h-12 text-amber-500" />
          </div>
        </div>
      )}

      {theme === 'light' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10">
            <Film className="w-12 h-12 text-amber-600" />
          </div>
          <div className="absolute bottom-10 left-10">
            <Camera className="w-10 h-10 text-amber-600" />
          </div>
        </div>
      )}

      {theme === 'dark' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10">
            <Film className="w-12 h-12 text-amber-500" />
          </div>
          <div className="absolute bottom-10 left-10">
            <Camera className="w-10 h-10 text-amber-500" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-amber-100 border-amber-300' : 'bg-amber-600/20 border-amber-500/30'}`}>
              <Clapperboard className={`w-8 h-8 ${themeClasses.cinemaElement}`} />
            </div>
            <h2 className={`text-5xl sm:text-6xl font-bold mb-4 ${themeClasses.title}`}>
              Experience
            </h2>
            <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-amber-100 border-amber-300' : 'bg-amber-600/20 border-amber-500/30'}`}>
              <Film className={`w-8 h-8 ${themeClasses.cinemaElement}`} />
            </div>
          </div>
          
          <div className={`w-24 h-1 ${themeClasses.timeline} mx-auto rounded-full mb-6`} />
          <p className={`text-xl max-w-2xl mx-auto ${themeClasses.subtitle}`}>
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className={`absolute left-8 top-0 bottom-0 w-1 ${themeClasses.timeline}`}></div>
              
              <div className="relative flex items-start space-x-6 pb-12">
                <div className={`flex-shrink-0 w-16 h-16 ${themeClasses.timeline} rounded-full flex items-center justify-center shadow-lg`}>
                  <Camera className="w-8 h-8 text-white" />
                </div>

                <div className={`flex-1 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl border-2 ${themeClasses.card}`}>
                  {theme === 'special' && (
                    <>
                      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>
                    </>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-2xl font-bold ${themeClasses.position}`}>
                          {exp.position}
                        </h3>
                        {theme === 'special' && (
                          <div className={`px-2 py-1 rounded text-xs font-mono bg-amber-500/10 ${themeClasses.cinemaElement}`}>
                            STARRING
                          </div>
                        )}
                      </div>
                      <h4 className={`text-xl font-semibold mb-2 ${themeClasses.company}`}>
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col sm:items-end space-y-2">
                      <div className={`flex items-center ${themeClasses.meta}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-mono">{exp.duration}</span>
                      </div>
                      <div className={`flex items-center ${themeClasses.meta}`}>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {theme === 'special' && (
                      <div className={`text-sm font-semibold ${themeClasses.cinemaElement} mb-3 flex items-center gap-2`}>
                        <Clapperboard className="w-4 h-4" />
                        KEY SCENES
                      </div>
                    )}
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-3 group">
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform duration-200"></div>
                        </div>
                        <p className={`leading-relaxed ${themeClasses.text} transition-all duration-200`}>
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full border ${theme === 'light' ? 'bg-amber-100 border-amber-300' : 'bg-amber-500/10 border-amber-500/30'}`}>
            <Award className={`w-5 h-5 ${themeClasses.cinemaElement}`} />
            <span className={`font-medium ${themeClasses.cinemaElement}`}>
              Software Development Professional
            </span>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;