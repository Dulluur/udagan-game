import React from "react";

const techStack = ["Godot Engine", "GDScript", "Aseprite", "Git"];
const platforms = ["PC", "Android"];

const Technology = () => (
  <section className="py-16 px-8 text-center">
    <h3 className="text-3xl font-bold mb-6">Технологии</h3>
    <div className="space-y-2 mb-4">
      <p>Стек: {techStack.join(', ')}</p>
      <p>Платформы: {platforms.join(', ')}</p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 ">
      <img src="/icons/godot.png" alt="Godot" className="w-48 h-48 mx-auto sm:mx-0" />
      <img src="/icons/github.png" alt="GitHub" className="w-48 h-48 mx-auto sm:mx-0" />
      <img src="/icons/aseprite.png" alt="Aseprite" className="w-48 h-48 mx-auto sm:mx-0" />
    </div>
  </section>
);

export default Technology;
