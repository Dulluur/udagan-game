import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-0 md:py-20">
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 md:px-0"
    >
      <h1 className="text-6xl md:text-7xl font-bold">UDAGAN</h1>
      <p className="text-xl md:text-2xl leading-relaxed">
        игра в жанре экшен-платформера и метроидвании в сеттинге якутского фольклора.
      </p>
      <p className="mt-8 text-base text-gray-400">
        ИМИ, СВФУ, ИВТ-22-2<br />
        Du, Wizzo, GeFallenerVAV
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 flex items-end justify-center h-full"
    >
      <div className="relative h-full w-auto flex items-end">
        <img
          src="/character.png"
          srcSet="/character@2x.png 2x, /character@4x.png 4x"
          alt="Главный герой"
          className="h-full object-contain"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
