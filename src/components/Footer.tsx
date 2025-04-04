import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      links: ["About Us", "Contact", "Location"]
    },
    {
      title: "VISIT",
      links: ["Tours", "Opening Hours", "Accessibility"]
    },
    {
      title: "HERITAGE",
      links: ["Monuments", "History", "Conservation"]
    }
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
                  <motion.li key={link} whileHover={{ x: 10 }}>
                    <Link to="#" className="hover:text-stone-300">
                      {link}
                    </Link>
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