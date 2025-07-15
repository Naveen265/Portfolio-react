import React from "react";
import {
  Code,
  Palette,
  Database,
  Server,
  GitBranch,
  Layers,
  Globe,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <Code className="w-8 h-8" />,
      description: 'Crafting semantic, accessible, and SEO-friendly markup with modern HTML5 best practices.',
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      name: "CSS3",
      icon: <Palette className="w-8 h-8" />,
      description: 'Building responsive, interactive layouts with modern CSS and animation libraries.',
      color: "from-blue-500 to-indigo-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "JavaScript",
      icon: <Globe className="w-8 h-8" />,
      description: 'Writing clean, modular JavaScript/Typescript for dynamic client-side experiences.',
      color: "from-yellow-400 to-orange-500",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      name: "ReactJS",
      icon: <Layers className="w-8 h-8" />,
      description: 'Developing scalable UIs using React components, hooks, and modern state management.',
      color: "from-cyan-400 to-blue-500",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      name: "NodeJS",
      icon: <Server className="w-8 h-8" />,
      description: 'Creating performant REST APIs and backend services using Express and Node.js.',
      color: "from-green-500 to-emerald-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8" />,
      description: 'Designing normalized relational databases and writing optimized SQL queries.',
      color: "from-purple-500 to-violet-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "Git/TFS",
      icon: <GitBranch className="w-8 h-8" />,
      description: 'Managing source code and team collaboration through Git, GitHub, and TFS.',
      color: "from-gray-600 to-gray-800",
      textColor: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Ensuring seamless experiences across all devices with mobile-first design strategies.',
      color: "from-pink-500 to-rose-600",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight">
              My Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          </motion.div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to
            build exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {skills.map((skill: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              <div
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${skill.borderColor} hover:border-opacity-50 overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Skill icon with animated background */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`relative p-4 rounded-2xl ${skill.bgColor} group-hover:shadow-lg transition-all duration-300`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                    ></div>
                    <div
                      className={`relative ${skill.textColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                  </motion.div>

                  <div className="space-y-2">
                    <h3
                      className={`text-xl font-bold ${skill.textColor} group-hover:text-gray-900 transition-colors duration-300`}
                    >
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>

                </div>

                {/* Decorative corner element */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">
              Always learning and growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
