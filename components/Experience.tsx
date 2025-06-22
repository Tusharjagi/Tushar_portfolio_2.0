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
      title: "SDE 1",
      company: "Shiprocket",
      location: "Gurugram",
      period: "March 2025 - Present",
      description: [
        "Developing and scaling web applications serving over 1M users.",
        "Mentoring junior developers and helping define engineering best practices.",
        "Optimized performance, reducing application load time by 40%.",
        "Collaborating with cross-functional teams to deliver high-impact features.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Ferns And Petals",
      location: "Gurugram",
      period: "June 2024 - March 2025",
      description: [
        "Created streamlined order modification features, reducing customer support queries by 38%.",
        "Built reusable UI components, reducing new feature development time by 60%.",
        "Integrated CleverTap to analyze user journeys, enabling 60% better personalization.",
        "Added Amazon Pay Wallet and Simpl Buy Later, boosting payment success by 28%.",
        "Developed FNP Wallet, improving transaction success by 26% and cutting refund time by 38%.",
        "Developed and maintained scalable client-facing features using Next.js and Angular.js .",
        "Integrated RESTful APIs and external services to enhance platform capabilities.",
        "Participated in agile sprints, code reviews, and team collaborations.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Ferns And Petals",
      location: "Gurugram",
      period: "June 2022 - June 2024",
      description: [
        "Designed and integrated a multi-image upload feature, increasing user engagement by 30%.",
        "Managed global store addresses, improving shipping accuracy by 42% and reducing errors by 36%.",
        "Enhanced Gate Pop customizer for dynamic user interactions, boosting engagement by 25%.",
        "Monitored and optimized core web vitals (INP, LCP, CLS) using New Relic and Kibana for 20M+ users.",
        "Built responsive UI using modern JS frameworks with designer collaboration.",
        "Actively participated in standups, sprint planning, and backlog grooming.",
        "Gained experience with cloud deployment and real-time monitoring tools.",
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
