import React from 'react';
import { Mail, Github, Linkedin, Facebook, Instagram, ArrowUp, Users, Target, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://in.linkedin.com/in/naveen-j-322b86210?trk=public_profile_browsemap',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/Naveen265/',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/_naveen_john_/',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      href: 'https://www.facebook.com/profile.php?id=100007966154773',
      color: 'hover:bg-blue-800'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          section: 'bg-gradient-to-br from-green-50 via-white to-emerald-50',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          button: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700',
          social: 'bg-gray-200 text-gray-700',
          footer: 'border-gray-300',
          footerText: 'text-gray-500',
          footerName: 'text-gray-900',
          backButton: 'border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white',
          footballElement: 'text-green-600'
        };
      case 'special':
        return {
          section: 'bg-gradient-to-br from-black via-green-950/10 to-black',
          title: 'text-white',
          subtitle: 'text-gray-300',
          button: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700',
          social: 'bg-green-900/30 text-white',
          footer: 'border-green-500/30',
          footerText: 'text-gray-400',
          footerName: 'text-white',
          backButton: 'border-green-600 text-green-400 hover:bg-green-600 hover:text-white',
          footballElement: 'text-green-400'
        };
      default:
        return {
          section: 'bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-800',
          title: 'text-white',
          subtitle: 'text-gray-400',
          button: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 hover:shadow-xl',
          social: 'bg-white/10 text-white',
          footer: 'border-white/10',
          footerText: 'text-gray-500',
          footerName: 'text-white',
          backButton: 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white',
          footballElement: 'text-green-400'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <section id="contact" className={`py-24 ${themeClasses.section} relative overflow-hidden`}>
      {/* Football Field Background */}
      <div className="absolute inset-0 opacity-5">
        {/* Field Lines */}
        <div className="absolute inset-0">
          {/* Center Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-green-500 transform -translate-y-1/2"></div>
          {/* Goal Lines */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-green-500"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-green-500"></div>
          {/* Sidelines */}
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-green-500"></div>
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-green-500"></div>
        </div>
        
        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Goal Areas */}
        <div className="absolute top-1/4 left-1/4 w-16 h-24 border-2 border-green-500 transform -translate-y-1/2"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-24 border-2 border-green-500 transform translate-y-1/2"></div>
      </div>

      {/* Floating Football Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-8 h-8 ${themeClasses.footballElement} opacity-10`}>
          <div className="w-full h-full rounded-full bg-current"></div>
        </div>
        <Users className={`absolute top-3/4 right-1/4 w-6 h-6 ${themeClasses.footballElement} opacity-10 animate-pulse`} style={{ animationDelay: '1s' }} />
        <Trophy className={`absolute top-1/2 left-3/4 w-7 h-7 ${themeClasses.footballElement} opacity-10 animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Football-Style Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`p-2 rounded-lg bg-green-600/20 border border-green-500/30`}>
              <Target className={`w-8 h-8 ${themeClasses.footballElement}`} />
            </div>
            <h2 className={`text-5xl font-extrabold tracking-tight ${themeClasses.title}`}>
              Final Whistle
            </h2>
            <div className={`p-2 rounded-lg bg-green-600/20 border border-green-500/30`}>
              <Users className={`w-8 h-8 ${themeClasses.footballElement}`} />
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full mb-6" />
          <p className={`text-lg max-w-2xl mx-auto ${themeClasses.subtitle}`}>
            Ready to team up? Let's connect and score some amazing projects together!
          </p>
        </div>

        {/* Stadium-Style Contact CTA */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Stadium Lights Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <a
              href="mailto:naveenduke526@gmail.com"
              className={`relative inline-flex items-center gap-3 px-12 py-5 text-lg font-bold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${themeClasses.button}`}
            >
              <Mail className="w-6 h-6" />
              Join My Team
            </a>
          </div>
          <p className={`mt-4 text-sm ${themeClasses.subtitle}`}>
            naveenduke526@gmail.com
          </p>
        </div>

        {/* Team Formation - Social Links */}
        <div className="mb-16">
          <div className={`text-center mb-8`}>
            <h3 className={`text-xl font-semibold ${themeClasses.title} mb-2`}>Team Formation</h3>
            <p className={`text-sm ${themeClasses.subtitle}`}>Connect with me across different platforms</p>
          </div>
          
          {/* Football Formation Layout */}
          <div className="relative max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-8 mb-8">
              {socialLinks.slice(0, 2).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-full transition-all duration-300 hover:scale-110 ${themeClasses.social} ${link.color}`}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`text-xs font-medium ${themeClasses.footballElement}`}>{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-8">
              {socialLinks.slice(2).map((link, index) => (
                <a
                  key={index + 2}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-full transition-all duration-300 hover:scale-110 ${themeClasses.social} ${link.color}`}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`text-xs font-medium ${themeClasses.footballElement}`}>{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Match Statistics */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center space-x-6 px-8 py-4 rounded-full border bg-green-500/10 border-green-500/30`}>
            <div className="text-center">
              <div className={`text-2xl font-bold ${themeClasses.footballElement}`}>2+</div>
              <div className={`text-xs ${themeClasses.subtitle}`}>Years Pro</div>
            </div>
            <div className="w-px h-8 bg-green-500/30"></div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${themeClasses.footballElement}`}>50+</div>
              <div className={`text-xs ${themeClasses.subtitle}`}>Projects</div>
            </div>
            <div className="w-px h-8 bg-green-500/30"></div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${themeClasses.footballElement}`}>100%</div>
              <div className={`text-xs ${themeClasses.subtitle}`}>Dedication</div>
            </div>
          </div>
        </div>

        {/* Footer - End of Match */}
        <div className={`text-center border-t pt-8 ${themeClasses.footer}`}>
          <p className={`text-sm mb-6 ${themeClasses.footerText}`}>
            © 2018 <span className={`font-medium ${themeClasses.footerName}`}>Naveen John</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-6 py-3 border-2 rounded-full transition-all duration-300 ${themeClasses.backButton}`}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Kickoff
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;