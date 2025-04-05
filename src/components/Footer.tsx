import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default function Footer() {
  const sections = [
    {
      title: "INFO",
      links: [
        { label: "About Us", to: "/about" },
        {
          label: "Contact",
          to: "https://docs.google.com/forms/d/e/1FAIpQLScJ8kcZQwUs381POvU8ZL7oCDJnAfwUAX2Axt0HFe8zum03Sg/viewform?usp=sharing",
        },
        { label: "Location", to: "/location" },
      ],
    },
    {
      title: "VISIT",
      links: [
        { label: "Tours", to: "#" },
        { label: "Opening Hours", to: "#" },
        { label: "Accessibility", to: "#" },
      ],
    },
    {
      title: "HERITAGE",
      links: [
        { label: "Monuments", to: "#" },
        { label: "History", to: "#" },
        { label: "Conservation", to: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {sections.map((section) => (
            <FadeInSection key={section.title}>
              <h3 className="font-serif text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 10 }}>
                    {link.to.startsWith("/") ? (
                      <Link
                        to={link.to}
                        className="hover:text-stone-300 transition"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-stone-300 transition"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </FadeInSection>
          ))}

          <FadeInSection>
            <h3 className="font-serif text-lg mb-4">CONNECT</h3>
            <p className="text-stone-400 mb-4">
              Stay updated with our newsletter
            </p>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Enter your email"
              className="bg-stone-800 px-4 py-2 w-full mb-2 text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-stone-900 px-4 py-2 w-full hover:bg-stone-100 transition"
            >
              Subscribe
            </motion.button>
          </FadeInSection>
        </div>
      </div>
    </footer>
  );
}
