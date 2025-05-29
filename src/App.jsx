import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Technology from './components/Technology';
import Progress from './components/Progress';
import Economic from './components/Economies';

function App() {
  return (
    <div className="bg-bg text-text min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Gallery />
        <Technology />
        <Progress />
        <Economic />
      </main>
      <Footer />
    </div>
  );
}

export default App;