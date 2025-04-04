import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif mb-8">About Gwalior Darshan</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-stone-600 mb-6">
                Gwalior Darshan is dedicated to preserving and promoting the rich cultural heritage
                of Gwalior. Our mission is to protect historical monuments, educate visitors about
                their significance, and ensure these treasures are preserved for future generations.
              </p>
              <p className="text-lg text-stone-600">
                Through guided tours, educational programs, and conservation efforts, we work
                tirelessly to maintain the architectural and cultural legacy of this historic city.
              </p>
            </div>
            <motion.div
              className="aspect-[4/3]"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/images/collage.webp"
                alt="Gwalior Heritage"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
