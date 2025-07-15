import React from 'react';
import { Mail, Github, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Contact = () => {
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Drop me a line, I'd love to hear from you and discuss potential opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact CTA */}
          <div className="text-center mb-12">
            <a
              href="mailto:naveenduke526@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-medium rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-110 ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center border-t border-white/20 pt-8">
            <p className="text-gray-300 mb-4">
              © 2024 Naveen John. All rights reserved.
            </p>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;