"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tusharjagi@gmail.com",
      href: "mailto:tusharjagi@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8285353051",
      href: "tel:+918285353051",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delhi, india",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Quick Chat",
      description: "Schedule a 15-min call",
      action: "Schedule Call",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Calendar,
      title: "Project Discussion",
      description: "Discuss your project needs",
      action: "Book Meeting",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Consultation",
      description: "Free 30-min consultation",
      action: "Get Started",
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50" />
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
              Let's Connect
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              className="group glass-card p-6 text-center cursor-pointer relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <action.icon className="text-white" size={24} />
              </motion.div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {action.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {action.description}
              </p>
              <motion.button
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                {action.action} →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="group flex items-center p-6 glass-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon className="text-white" size={20} />
                  </motion.div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {info.title}
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold text-lg">
                      {info.value}
                    </p>
                  </div>

                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="glass-card p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Available for new projects
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Currently accepting new client work and interesting
                collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 disabled:from-primary-400 disabled:to-purple-400 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send
                      size={20}
                      className="mr-2 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
