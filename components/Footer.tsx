"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Tusharjagi",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tushar-jagi-519025215/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/tusharjagi",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "#contact",
      label: "Email",
    },
    {
      iconSrc: "/icons/dev-to.svg",
      href: "https://dev.to/tusharjagi",
      label: "Dev.to",
    },
    {
      iconSrc: "/icons/hashnode.svg",
      href: "https://hashnode.com/@Tusharjagi",
      label: "Hashnode",
    },
    {
      iconSrc: "/icons/medium.svg",
      href: "https://medium.com/@tusharjagi",
      label: "Medium",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-center">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <motion.div
              className="text-3xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              TJ
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Passionate full-stack developer creating innovative solutions and
              exceptional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {socialLinks.map(({ icon: Icon = "", href, label, iconSrc }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  {iconSrc ? (
                    <img
                      src={iconSrc}
                      width="24px"
                      height="24px"
                      alt={`${label}-icon`}
                    />
                  ) : (
                    <Icon size={20} />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} /> by
            Tushar Jagi
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
