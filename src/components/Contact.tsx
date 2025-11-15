import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://in.linkedin.com/in/naveen-j-322b86210?trk=public_profile_browsemap",
      color: "hover:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/Naveen265/",
      color: "hover:bg-gray-800",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/_naveen_john_/",
      color: "hover:bg-pink-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      href: "https://www.facebook.com/profile.php?id=100007966154773",
      color: "hover:bg-blue-800",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always open to chatting about new opportunities, collaborations,
            or just saying hello.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-12">
          <a
            href="mailto:naveenjohnken@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-5 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 bg-white/10 text-white rounded-full transition-all duration-300 hover:scale-110 ${link.color}`}
              aria-label={link.name}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 mb-4">
            Ac 2018 <span className="text-white font-medium">Naveen John</span>.
            All rights reserved.
            <div>Version 2.0 is coming... and it's worth the wait.</div>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
