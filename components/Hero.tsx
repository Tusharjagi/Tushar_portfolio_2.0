"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Morphing Blob Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-purple-400/20 morphing-blob floating-animation" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-primary-400/20 morphing-blob floating-animation"
        style={{ animationDelay: "2s" }}
      />

      {/* Interactive Cursor Effect */}
      <motion.div
        className="absolute w-6 h-6 bg-primary-500/30 rounded-full pointer-events-none z-10 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <div className="container-center section-padding relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting with typing effect */}
            <motion.div
              className="text-lg md:text-xl text-primary-600 dark:text-primary-400 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center">
                <Sparkles className="mr-2" size={20} />
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-shimmer">Tushar Jagi</span>
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.h1>

            <motion.div
              className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text font-semibold">
                Full Stack Developer
              </span>
              <span className="mx-4">•</span>
              <span className="gradient-text font-semibold">
                Software Engineer
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting innovative digital experiences with cutting-edge
              technologies. Passionate about creating solutions that make a
              difference.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#contact"
                className="group relative bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-2xl pulse-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#projects"
                className="group relative glass-card px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl magnetic"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="gradient-text">View My Work</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="group relative border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="mr-2" />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                {
                  icon: Github,
                  href: "#",
                  label: "GitHub",
                  color: "hover:text-gray-800 dark:hover:text-gray-200",
                },
                {
                  icon: Linkedin,
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:text-blue-600",
                },
                {
                  icon: Mail,
                  href: "#contact",
                  label: "Email",
                  color: "hover:text-red-500",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`group relative p-4 glass-card text-gray-700 dark:text-gray-300 ${color} transition-all duration-300 magnetic`}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={24} />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "3+", label: "Years Exp" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 dark:text-gray-500 mb-2">
            Scroll to explore
          </span>
          <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
