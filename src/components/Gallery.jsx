import React from 'react';
import { motion } from 'framer-motion';

const images = ['/img1.png', '/img2.png', '/img3.png', '/img4.png'];

const Gallery = () => (
  <section id="gallery" className="py-16 px-8 bg-bg">
    <h3 className="text-3xl font-bold text-center mb-12">Галерея</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          whileHover={{ opacity: 0.8 }}
          className="overflow-hidden rounded-lg"
        >
          <img src={src} alt={`Скриншот ${idx + 1}`} className="w-full h-auto" />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Gallery;