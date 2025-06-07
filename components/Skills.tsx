"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        {
          name: "React/Next.js",
          level: 95,
          color: "from-blue-500 to-cyan-500",
        },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        {
          name: "Tailwind CSS",
          level: 95,
          color: "from-teal-500 to-green-500",
        },
        { name: "Vue.js", level: 85, color: "from-green-500 to-emerald-500" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js/Express",
          level: 90,
          color: "from-green-600 to-green-400",
        },
        {
          name: "Python/Django",
          level: 85,
          color: "from-yellow-500 to-orange-500",
        },
        { name: "PostgreSQL", level: 88, color: "from-blue-600 to-indigo-600" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-teal-500" },
      ],
    },
    {
      title: "Tools & Cloud",
      icon: "☁️",
      skills: [
        { name: "Git/GitHub", level: 92, color: "from-gray-700 to-gray-500" },
        { name: "Docker", level: 78, color: "from-blue-500 to-blue-600" },
        {
          name: "AWS/Cloud",
          level: 80,
          color: "from-orange-500 to-yellow-500",
        },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-purple-500" },
      ],
    },
  ];

  const additionalSkills = [
    { name: "React Native", category: "Mobile", color: "bg-blue-500" },
    { name: "Firebase", category: "Backend", color: "bg-orange-500" },
    { name: "Redis", category: "Database", color: "bg-red-500" },
    { name: "Webpack", category: "Tools", color: "bg-blue-600" },
    { name: "Jest", category: "Testing", color: "bg-green-600" },
    { name: "Cypress", category: "Testing", color: "bg-gray-700" },
    { name: "Figma", category: "Design", color: "bg-purple-500" },
    { name: "Adobe XD", category: "Design", color: "bg-pink-500" },
    { name: "Sass/SCSS", category: "Styling", color: "bg-pink-600" },
    { name: "Material-UI", category: "UI Library", color: "bg-blue-400" },
    { name: "REST APIs", category: "API", color: "bg-green-500" },
    { name: "Microservices", category: "Architecture", color: "bg-indigo-500" },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-primary-400/10 rounded-full blur-3xl" />

      <div className="container-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
              My Expertise
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex space-x-2">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
              {skillCategories[activeCategory].title} Skills
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map(
                (skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div
                          className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1.5,
                            delay: skillIndex * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Also Experienced With
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="group relative"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="glass-card px-4 py-3 rounded-full font-medium cursor-default relative overflow-hidden">
                  <div
                    className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <span className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4 gradient-text">
              Continuous Learning
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm always exploring new technologies and staying up-to-date with
              the latest trends in web development. Currently learning AI/ML
              integration and exploring Web3 technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
