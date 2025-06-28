"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Case fusion",
      description:
        "Case Fusion is an E-commerce platform that allows users to design and order their own personalized phone covers.",
      image: "/images/case_fusion.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Framer motion"],
      category: "fullstack",
      github: "https://github.com/Tusharjagi/case-fusion",
      demo: "https://case-fusion.vercel.app/",
      featured: true,
      stats: { stars: 89, views: "1.8k" },
    },
    {
      title: "KanBan Dashboard",
      description:
        "Kanban Dashboard is a task management tool that helps users efficiently organize and track their daily tasks",
      image: "/images/kanban.png",
      technologies: ["Next.js", "Redux/toolkit", "Drag and Drop", "tailwind"],
      category: "frontend",
      github: "https://github.com/Tusharjagi/KanBan-Task-Dashboard",
      demo: "https://kan-ban-task-dashboard.vercel.app/",
      featured: false,
      stats: { stars: 67, views: "1.2k" },
    },
    {
      title: "macOS Finder",
      description:
        "In macOS Finder, we can drag and drop folders, create new folders, sort them by name, and delete folders.",
      image: "/images/mac_os.png",
      technologies: ["React", "MUI", "redux"],
      category: "frontend",
      github: "https://github.com/Tusharjagi/file-explorer",
      demo: "https://file-explorer-kohl-three.vercel.app/",
      featured: true,
      stats: { stars: 124, views: "2.1k" },
    },
    {
      title: "World Time",
      description:
        "Built with Flutter, the World Time app allows users to search for a country or city and displays the current time for the selected location.",
      image: "/images/world_time.png",
      technologies: ["Flutter"],
      category: "mobile",
      github: "https://github.com/Tusharjagi/Flutter_World_Time",
      demo: "https://github.com/Tusharjagi/Flutter_World_Time",
      featured: false,
      stats: { stars: 156, views: "3.2k" },
    },
    {
      title: "Portfolio (Old)",
      description:
        "Built a responsive and SEO-friendly portfolio website using Next.js to highlight my work, technical skills, and contact information.",
      image: "/images/web_developer.png",
      technologies: ["Next.js", "MUI"],
      category: "frontend",
      github: "https://github.com/Tusharjagi/personal_website",
      demo: "https://tushar-jagi.vercel.app/",
      featured: false,
      stats: { stars: 203, views: "4.1k" },
    },
    {
      title: "Travello",
      description:
        "Built a basic travel booking app using Python, Django, PostgreSQL, and Django Templates, allowing users to explore destinations and make travel reservations.",
      image: "/images/django.png",
      technologies: ["Python", "Django", "Postgresql"],
      category: "fullstack",
      github: "https://github.com/Tusharjagi/Django_Project",
      demo: "https://github.com/Tusharjagi/Django_Project",
      featured: false,
      stats: { stars: 78, views: "1.5k" },
    },
    {
      title: "TODO",
      description:
        "Built a To-Do application using the MERN stack (MongoDB, Express.js, React, Node.js) that supports full CRUD functionality.",
      image: "/images/todo.png",
      technologies: ["React", "Redux", "MongoDB", "Node.js", "Express.js"],
      category: "fullstack",
      github: "https://github.com/Tusharjagi/Todo",
      demo: "https://github.com/Tusharjagi/Todo",
      featured: false,
      stats: { stars: 48, views: "1.2k" },
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50" />

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
              My Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills
            and expertise
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg"
                  : "glass-card text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              whileHover={{ y: -10 }}
            >
              <div className="glass-card overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star size={14} className="mr-1" />
                      Featured
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Star size={14} className="mr-1" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {project.stats.views}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center glass-card px-8 py-4 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
