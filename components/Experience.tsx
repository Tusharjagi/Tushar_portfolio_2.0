"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of scalable web applications serving 1M+ users",
        "Mentored junior developers and established coding standards",
        "Reduced application load time by 40% through optimization",
        "Collaborated with cross-functional teams to deliver features",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple client projects using React and Node.js",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Built RESTful APIs and integrated third-party services",
        "Participated in agile development process and code reviews",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup Ventures",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Participated in daily standups and sprint planning meetings",
        "Gained experience with cloud deployment and monitoring",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my
            career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-purple-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />

                <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
