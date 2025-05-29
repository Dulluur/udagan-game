import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Пиксель-арт', description: 'Аутентичные узоры', icon: '/icons/art.png' },
  { title: 'Metroidvania', description: 'Исследуй мир', icon: '/icons/map.png' },
  { title: 'Мифические враги', description: 'Борись с духами', icon: '/icons/enemy.png' },
];

const Features = () => (
  <section id="features" className="py-16 px-8">
    <h3 className="text-3xl font-bold text-center mb-12">Особенности</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
        >
          <img src={f.icon} alt={f.title} className="mx-auto mb-4 w-auto h-auto" />
          <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
          <p>{f.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;