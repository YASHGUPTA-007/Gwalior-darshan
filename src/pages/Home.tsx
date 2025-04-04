import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/images/Background-image.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
        >
          <div className="text-white max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              THE HOME OF GWALIOR HERITAGE CONSERVATION
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl mb-8"
            >
              Discover the rich cultural heritage and majestic architecture of
              Gwalior, a city where history comes alive.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-stone-900 px-8 py-3 rounded-none hover:bg-stone-100 transition"
            >
              Explore Heritage Sites
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}