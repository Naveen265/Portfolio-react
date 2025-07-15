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
      description:
        "Crafting semantic, accessible, and SEO-friendly markup with modern HTML5 best practices.",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS3",
      icon: <Palette className="w-8 h-8" />,
      description:
        "Building responsive, interactive layouts with modern CSS and animation libraries.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "JavaScript",
      icon: <Globe className="w-8 h-8" />,
      description:
        "Writing clean, modular JavaScript/Typescript for dynamic client-side experiences.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "ReactJS",
      icon: <Layers className="w-8 h-8" />,
      description:
        "Developing scalable UIs using React components, hooks, and modern state management.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "NodeJS",
      icon: <Server className="w-8 h-8" />,
      description:
        "Creating performant REST APIs and backend services using Express and Node.js.",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8" />,
      description:
        "Designing normalized relational databases and writing optimized SQL queries.",
      color: "from-purple-500 to-violet-600",
    },
    {
      name: "Git/TFS",
      icon: <GitBranch className="w-8 h-8" />,
      description:
        "Managing source code and team collaboration through Git, GitHub, and TFS.",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="w-8 h-8" />,
      description:
        "Ensuring seamless experiences across all devices with mobile-first design strategies.",
      color: "from-pink-500 to-rose-600",
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl" />
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
              <span className="text-white">My Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          </motion.div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to
            build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              <div className="relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-700 hover:border-gray-600 overflow-hidden">
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Skill content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon rotates on card hover */}
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative p-4 rounded-2xl bg-gray-700 transition-all duration-300"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                    />
                    <div className="relative text-gray-300 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </motion.div>

                  {/* Name & description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Top-right corner decoration */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer pulse text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 font-medium">
              Always learning and growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
