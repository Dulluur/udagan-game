import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="py-4 px-8 flex justify-between items-center"
  >
    <h1 className="text-2xl font-bold">UDAGAN</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#features" className="hover:text-accent">Фичи</a></li>
        <li><a href="#gallery" className="hover:text-accent">Галерея</a></li>
        <li><a href="#contact" className="hover:text-accent">Контакты</a></li>
      </ul>
    </nav>
  </motion.header>
);

export default Header;