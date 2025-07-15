import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions to the software development industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"></div>
              
              {/* Experience Card */}
              <div className="relative flex items-start space-x-6 pb-12">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl font-semibold text-orange-400 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col sm:items-end space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">
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
      </div>
    </section>
  );
};

export default Experience;
