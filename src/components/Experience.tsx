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
          section: 'bg-gradient-to-br from-slate-50 via-gray-100 to-slate-50',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          card: 'bg-white border-gray-200 shadow-lg',
          position: 'text-gray-900',
          company: 'text-amber-600',
          meta: 'text-gray-500',
          text: 'text-gray-700',
          timeline: 'from-amber-500 to-orange-500',
          cinemaElement: 'text-amber-600'
        };
      case 'special':
        return {
          section: 'bg-gradient-to-br from-black via-yellow-950/10 to-black',
          title: 'text-white',
          subtitle: 'text-gray-300',
          card: 'bg-gray-900 border-yellow-500/30 shadow-2xl shadow-yellow-500/10',
          position: 'text-white',
          company: 'text-yellow-400',
          meta: 'text-gray-400',
          text: 'text-gray-300',
          timeline: 'from-yellow-600 to-amber-600',
          cinemaElement: 'text-yellow-400'
        };
      default:
        return {
          section: 'bg-gradient-to-br from-slate-900 via-amber-900/10 to-slate-800',
          title: 'text-white',
          subtitle: 'text-gray-400',
          card: 'bg-slate-800 border-amber-500/30 shadow-xl',
          position: 'text-white',
          company: 'text-amber-400',
          meta: 'text-gray-400',
          text: 'text-gray-300',
          timeline: 'from-amber-500 to-orange-500',
          cinemaElement: 'text-amber-400'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <section id="experience" className={`py-24 ${themeClasses.section} relative overflow-hidden`}>
      {/* Cinema Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Film Strip Pattern */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-4 h-8 bg-amber-500/30 mb-2 ml-6" style={{ marginTop: i === 0 ? '0' : '8px' }} />
          ))}
        </div>
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-4 h-8 bg-amber-500/30 mb-2 mr-6" style={{ marginTop: i === 0 ? '0' : '8px' }} />
          ))}
        </div>
        
        {/* Spotlight Effects */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Cinema Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Film className={`absolute top-1/4 right-1/4 w-8 h-8 ${themeClasses.cinemaElement} opacity-10 animate-pulse`} />
        <Camera className={`absolute top-3/4 left-1/4 w-6 h-6 ${themeClasses.cinemaElement} opacity-10 animate-pulse`} style={{ animationDelay: '1s' }} />
        <Award className={`absolute top-1/2 right-3/4 w-7 h-7 ${themeClasses.cinemaElement} opacity-10 animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          {/* Cinema-Style Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`p-2 rounded-lg bg-amber-600/20 border border-amber-500/30`}>
              <Clapperboard className={`w-8 h-8 ${themeClasses.cinemaElement}`} />
            </div>
            <h2 className={`text-5xl sm:text-6xl font-bold mb-4 ${themeClasses.title}`}>
              Career Reel
            </h2>
            <div className={`p-2 rounded-lg bg-amber-600/20 border border-amber-500/30`}>
              <Film className={`w-8 h-8 ${themeClasses.cinemaElement}`} />
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6" />
          <p className={`text-xl max-w-2xl mx-auto ${themeClasses.subtitle}`}>
            The story of my professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Cinema Film Strip Timeline */}
              <div className={`absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${themeClasses.timeline}`}>
                {/* Film perforations */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute w-3 h-2 bg-amber-500/30 -left-1" style={{ top: `${i * 12.5}%` }} />
                ))}
              </div>
              
              {/* Experience Card */}
              <div className="relative flex items-start space-x-6 pb-12">
                {/* Cinema Camera Icon */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${themeClasses.timeline} rounded-full flex items-center justify-center shadow-lg relative`}>
                  <Camera className="w-8 h-8 text-white" />
                  {/* Lens Flare Effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                </div>

                {/* Content Card with Cinema Styling */}
                <div className={`flex-1 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl border-2 ${themeClasses.card} relative overflow-hidden`}>
                  {/* Film Frame Border */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-2xl font-bold ${themeClasses.position}`}>
                          {exp.position}
                        </h3>
                        <div className={`px-2 py-1 rounded text-xs font-mono bg-amber-500/10 ${themeClasses.cinemaElement}`}>
                          STARRING
                        </div>
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

                  {/* Scene List */}
                  <div className="space-y-4">
                    <div className={`text-sm font-semibold ${themeClasses.cinemaElement} mb-3 flex items-center gap-2`}>
                      <Clapperboard className="w-4 h-4" />
                      KEY SCENES
                    </div>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-3 group">
                        <div className="flex-shrink-0 mt-2">
                          <div className={`w-2 h-2 rounded-full ${themeClasses.cinemaElement.includes('amber') ? 'bg-amber-500' : 'bg-yellow-500'} group-hover:scale-125 transition-transform duration-200`}></div>
                        </div>
                        <p className={`leading-relaxed ${themeClasses.text} group-hover:text-opacity-90 transition-all duration-200`}>
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Director's Cut Badge */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <div className={`text-xs font-mono px-2 py-1 rounded border ${themeClasses.cinemaElement} border-current`}>
                      DIRECTOR'S CUT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End Credits */}
        <div className="text-center mt-16">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full border bg-amber-500/10 border-amber-500/30`}>
            <Award className={`w-5 h-5 ${themeClasses.cinemaElement}`} />
            <span className={`font-medium ${themeClasses.cinemaElement}`}>
              Best Performance in Software Development
            </span>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;