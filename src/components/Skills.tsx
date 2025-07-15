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
  Gamepad2,
  Zap,
  Trophy,
  Target
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    {
      name: "HTML5",
      icon: <Code className="w-8 h-8" />,
      description: "Crafting semantic, accessible, and SEO-friendly markup with modern HTML5 best practices.",
      color: "from-orange-500 to-red-500",
      level: 95
    },
    {
      name: "CSS3",
      icon: <Palette className="w-8 h-8" />,
      description: "Building responsive, interactive layouts with modern CSS and animation libraries.",
      color: "from-blue-500 to-indigo-600",
      level: 90
    },
    {
      name: "JavaScript",
      icon: <Globe className="w-8 h-8" />,
      description: "Writing clean, modular JavaScript/Typescript for dynamic client-side experiences.",
      color: "from-yellow-400 to-orange-500",
      level: 88
    },
    {
      name: "ReactJS",
      icon: <Layers className="w-8 h-8" />,
      description: "Developing scalable UIs using React components, hooks, and modern state management.",
      color: "from-cyan-400 to-blue-500",
      level: 92
    },
    {
      name: "NodeJS",
      icon: <Server className="w-8 h-8" />,
      description: "Creating performant REST APIs and backend services using Express and Node.js.",
      color: "from-green-500 to-emerald-600",
      level: 85
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8" />,
      description: "Designing normalized relational databases and writing optimized SQL queries.",
      color: "from-purple-500 to-violet-600",
      level: 80
    },
    {
      name: "Git/TFS",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Managing source code and team collaboration through Git, GitHub, and TFS.",
      color: "from-gray-600 to-gray-800",
      level: 87
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Ensuring seamless experiences across all devices with mobile-first design strategies.",
      color: "from-pink-500 to-rose-600",
      level: 93
    },
  ];

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          section: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          card: 'bg-white border-gray-200 hover:border-indigo-300',
          cardIcon: 'bg-indigo-100',
          cardTitle: 'text-gray-800 group-hover:text-gray-900',
          cardDesc: 'text-gray-600 group-hover:text-gray-700',
          progressBg: 'bg-gray-200',
          gameElement: 'text-indigo-600'
        };
      case 'special':
        return {
          section: 'bg-gradient-to-br from-black via-purple-950/20 to-black',
          title: 'text-white',
          subtitle: 'text-gray-300',
          card: 'bg-gray-900 border-purple-500/30 hover:border-purple-500/50',
          cardIcon: 'bg-purple-900/30',
          cardTitle: 'text-gray-200 group-hover:text-white',
          cardDesc: 'text-gray-400 group-hover:text-gray-300',
          progressBg: 'bg-gray-700',
          gameElement: 'text-purple-400'
        };
      default:
        return {
          section: 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800',
          title: 'text-white',
          subtitle: 'text-gray-400',
          card: 'bg-slate-800 border-purple-500/30 hover:border-purple-400',
          cardIcon: 'bg-purple-900/40',
          cardTitle: 'text-gray-200 group-hover:text-white',
          cardDesc: 'text-gray-400 group-hover:text-gray-300',
          progressBg: 'bg-gray-700',
          gameElement: 'text-purple-400'
        };
    }
  };

  const themeClasses = getThemeClasses();

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
      className={`py-24 ${themeClasses.section} relative overflow-hidden`}
    >
      {/* Gaming UI Elements - Abstract Background */}
      <div className="absolute inset-0 opacity-5">
        {/* Pixel Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Gaming HUD Elements */}
        <div className="absolute top-10 left-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-2 bg-green-500/30 rounded-full">
              <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-10 right-10">
          <div className="flex items-center gap-2">
            <Trophy className={`w-6 h-6 ${themeClasses.gameElement}`} />
            <span className={`font-mono text-sm ${themeClasses.gameElement}`}>LVL 99</span>
          </div>
        </div>
      </div>

      {/* Floating Gaming Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Gamepad2 className={`absolute top-1/4 left-1/4 w-8 h-8 ${themeClasses.gameElement} opacity-10 animate-pulse`} />
        <Target className={`absolute top-3/4 right-1/4 w-6 h-6 ${themeClasses.gameElement} opacity-10 animate-pulse`} style={{ animationDelay: '1s' }} />
        <Zap className={`absolute top-1/2 left-3/4 w-7 h-7 ${themeClasses.gameElement} opacity-10 animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Gaming-Style Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`p-2 rounded-lg bg-purple-600/20 border border-purple-500/30`}>
              <Gamepad2 className={`w-8 h-8 ${themeClasses.gameElement}`} />
            </div>
            <h2 className={`text-5xl sm:text-6xl font-bold tracking-tight ${themeClasses.title}`}>
              Skill Tree
            </h2>
            <div className={`p-2 rounded-lg bg-purple-600/20 border border-purple-500/30`}>
              <Trophy className={`w-8 h-8 ${themeClasses.gameElement}`} />
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full mb-6" />
          <p className={`text-xl ${themeClasses.subtitle} max-w-2xl mx-auto leading-relaxed`}>
            Unlocked abilities and mastered technologies in my development journey
          </p>
        </motion.div>

        {/* Skill Cards with Gaming Elements */}
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
              <div className={`relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden ${themeClasses.card}`}>
                {/* Gaming Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-xs font-mono px-2 py-1 rounded ${themeClasses.gameElement} bg-purple-500/10`}>
                    SKILL
                  </div>
                  <div className={`text-xs font-mono ${themeClasses.gameElement}`}>
                    {skill.level}%
                  </div>
                </div>

                {/* Skill Icon with Gaming Style */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`relative p-4 rounded-2xl transition-all duration-300 ${themeClasses.cardIcon}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                    />
                    <div className="relative text-gray-300 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </motion.div>

                  {/* Skill Info */}
                  <div className="space-y-3 w-full">
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${themeClasses.cardTitle}`}>
                      {skill.name}
                    </h3>
                    
                    {/* Gaming-Style Progress Bar */}
                    <div className="w-full">
                      <div className={`w-full h-2 ${themeClasses.progressBg} rounded-full overflow-hidden`}>
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${themeClasses.cardDesc}`}>
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Gaming Card Border Effect */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gaming Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full border bg-purple-500/10 border-purple-500/30`}>
            <Trophy className={`w-5 h-5 ${themeClasses.gameElement}`} />
            <span className={`font-medium ${themeClasses.gameElement}`}>
              Achievement Unlocked: Full Stack Master
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;