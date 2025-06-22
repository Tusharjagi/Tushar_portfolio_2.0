"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Zap, Award, Users, Coffee } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices and industry standards.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and search engine visibility.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const achievements = [
    { icon: Award, label: "Awards Won", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Coffee, label: "Coffee Cups", value: "1000+" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-primary-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-primary-400/10 rounded-full blur-3xl" />

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
              Get to know me
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a self-driven software engineer with over 3 years of experience
            in crafting seamless, scalable, and user-centric web applications.
            From building performant frontends to developing robust APIs, I
            thrive at the intersection of design and engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My professional journey began with a strong foundation in
                Computer Science and a relentless curiosity for solving
                real-world problems with code. I started at{" "}
                <span className="font-medium text-primary-600 dark:text-primary-400">
                  Ferns N Petals
                </span>
                , where I played a key role in scaling web experiences for
                millions of users by collaborating across teams and delivering
                production-ready features using <strong>Next.js</strong>,{" "}
                <strong>Node.js</strong>, and <strong>AngularJS</strong>.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I’m working at{" "}
                <span className="font-medium text-primary-600 dark:text-primary-400">
                  Shiprocket
                </span>
                , where I contribute to the <strong>Shiprocket Cargo</strong>{" "}
                product. I lead the development of frontend features, build
                scalable UI components, and ensure smooth user flows using
                technologies like <strong>React</strong>,{" "}
                <strong>TypeScript</strong>, <strong>Styled Components</strong>{" "}
                and <strong>Tailwind CSS</strong>. My role also involves
                collaborating closely with design and product teams to deliver
                impactful solutions in the logistics domain.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether it's optimizing performance, enhancing user experience
                with clean UI, or integrating analytics for actionable insights,
                I approach each challenge with a full-stack mindset and a
                passion for continuous learning. Beyond work, I contribute to
                open-source, write about design patterns, and love exploring
                space tech and travel.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-2xl group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Work Together</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>

          <div className="grid gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 glass-card overflow-hidden group">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full floating-animation" />
                <div
                  className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full floating-animation"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 left-4 w-8 h-8 bg-white/20 rounded-full floating-animation"
                  style={{ animationDelay: "2s" }}
                />

                <div className="relative z-10 w-full h-full flex items-center justify-center text-white text-center p-8">
                  <div>
                    <motion.div
                      className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Code size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">
                      Professional Developer
                    </h3>
                    <p className="text-white/80">
                      Building experiences that balance code, creativity &
                      performance
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-purple-600/20 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center p-4 glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <achievement.icon className="w-8 h-8 mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                  <div className="text-2xl font-bold gradient-text">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="glass-card p-8 text-center h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-50" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
