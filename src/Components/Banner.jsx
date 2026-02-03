import React, { useEffect, useState, useCallback } from 'react';

const slides = [
  {
    image: 'https://i.ibb.co/MDtH6SRj/image.png',
    title: 'THE MONSTERA',
    description:
      'A botanical masterpiece that redefines modern interior aesthetics with its bold, structural foliage.',
    serial: '01',
    color: '#064e3b',
  },
  {
    image: 'https://i.ibb.co/5X8pRsHY/image.png',
    title: 'SILVER LACE',
    description:
      'Delicate textures meet resilient growth, perfect for the minimalist sanctuary seeking soft contrasts.',
    serial: '02',
    color: '#1e293b',
  },
  {
    image: 'https://i.ibb.co/RTMG8Jm1/image.png',
    title: 'VELVET MOSS',
    description:
      'Experience the lush touch of nature with our rare collection of deep-forest velvet species.',
    serial: '03',
    color: '#334155',
  },
];

const AdvancedBanner = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % slides.length);
      setAnimating(false);
    }, 800);
  }, [animating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen min-h-[800px] bg-[#050505] overflow-hidden flex items-center font-sans">
      {/* Background Year - Kinetic Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <h1 className="text-[35vw] font-black text-white/[0.02] leading-none select-none">
          2026
        </h1>
      </div>

      <div className="container mx-auto px-8 md:px-16 grid grid-cols-12 items-center relative z-10">
        {/* Left Side: Editorial Content */}
        <div className="col-span-12 lg:col-span-5 space-y-12 order-2 lg:order-1">
          <div
            className={`transition-all duration-1000 transform ${animating ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-emerald-500 font-mono text-xl tracking-tighter italic">
                Featured Species
              </span>
              <div className="h-[1px] w-24 bg-emerald-500/50"></div>
            </div>

            <h2 className="text-white text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
              {slides[current].title.split(' ').map((word, i) => (
                <span key={i} className="block overflow-hidden">
                  <span className="block">{word}</span>
                </span>
              ))}
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-md font-light leading-relaxed tracking-wide">
              {slides[current].description}
            </p>

            <div className="pt-12 flex flex-wrap gap-6 items-center">
              <button className="relative group px-12 py-5 bg-white overflow-hidden rounded-sm transition-all duration-500">
                <span className="relative z-10 text-black font-black uppercase text-xs tracking-[0.2em] group-hover:text-white transition-colors">
                  View Details
                </span>
                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>

              <button className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                  <div className="w-2 h-2 bg-white rounded-full group-hover:bg-emerald-500 animate-pulse"></div>
                </div>
                <span className="text-white/50 uppercase text-[10px] font-bold tracking-[0.3em] group-hover:text-white transition-colors">
                  Watch Film
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Dynamic Frame */}
        <div className="col-span-12 lg:col-span-7 relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div
            className={`relative transition-all duration-1000 ease-in-out transform ${animating ? 'scale-90 opacity-0 blur-lg' : 'scale-100 opacity-100 blur-0'}`}
          >
            {/* Background Texture for Image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-emerald-500/30"></div>

            <div className="relative group overflow-hidden">
              <img
                src={slides[current].image}
                alt="Plant"
                className="w-[300px] md:w-[450px] lg:w-[550px] aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-110"
              />

              {/* Overlay Glass Info */}
              <div className="absolute bottom-0 right-0 p-8 backdrop-blur-3xl bg-black/40 border-l border-t border-white/10 w-full max-w-[280px]">
                <div className="text-emerald-500 text-xs font-bold tracking-[0.4em] uppercase mb-2">
                  Category
                </div>
                <div className="text-white text-2xl font-serif italic mb-4">
                  Indoor Exotic
                </div>
                <div className="w-full h-[1px] bg-white/10 mb-4"></div>
                <div className="flex justify-between items-center text-white/50 text-[10px] uppercase font-bold tracking-widest">
                  <span>Difficulty: Easy</span>
                  <span>Water: Weekly</span>
                </div>
              </div>
            </div>

            {/* Serial Number */}
            <div className="absolute -top-10 -right-10 hidden xl:block">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent text-[120px] font-black opacity-20">
                {slides[current].serial}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation Controls */}
      <div className="absolute bottom-16 right-16 flex items-center gap-12 z-50">
        <div className="flex items-center gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!animating) setCurrent(i);
              }}
              className={`transition-all duration-500 h-1 rounded-full ${current === i ? 'w-16 bg-emerald-500' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              !animating &&
              setCurrent(prev => (prev - 1 + slides.length) % slides.length)
            }
            className="w-14 h-14 flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-black transition-all"
          >
            ←
          </button>
          <button
            onClick={() => !animating && nextSlide()}
            className="w-14 h-14 flex items-center justify-center bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
          >
            →
          </button>
        </div>
      </div>

      {/* Decorative Side Text */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 hidden 2xl:block">
        <p className="text-white/10 text-sm font-bold tracking-[1em] uppercase">
          Crafting Botanical Luxury Since 1998
        </p>
      </div>
    </div>
  );
};

export default AdvancedBanner;
