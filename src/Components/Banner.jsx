import React, { useEffect, useState, useCallback } from 'react';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop',
    title: 'THE MONSTERA',
    description:
      'A botanical masterpiece that redefines modern interior aesthetics with its bold, structural foliage.',
    serial: '01',
    tag: 'Tropical Accent',
    difficulty: 'Easy',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?q=80&w=1000&auto=format&fit=crop',
    title: 'SILVER LACE',
    description:
      'Delicate textures meet resilient growth, perfect for the minimalist sanctuary seeking soft contrasts.',
    serial: '02',
    tag: 'Minimalist Fern',
    difficulty: 'Moderate',
  },
  {
    image:
      'https://images.unsplash.com/photo-1502810313293-7612e0f81cf8?q=80&w=1000&auto=format&fit=crop',
    title: 'VELVET MOSS',
    description:
      'Experience the lush touch of nature with our rare collection of deep-forest velvet species.',
    serial: '03',
    tag: 'Forest Floor',
    difficulty: 'Easy',
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
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full min-h-screen bg-[#fcfcf9] overflow-hidden flex items-center font-sans selection:bg-emerald-100">
      {/* Background Kinetic Typography (Light Mode) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <h1 className="text-[30vw] font-black text-black/[0.03] leading-none select-none">
          {slides[current].serial}
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-0 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Content Side */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 order-2 lg:order-1 mt-10 lg:mt-0">
            <div
              className={`transition-all duration-1000 transform ${animating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-emerald-700 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                  Premium Collection
                </span>
                <div className="h-[1px] w-12 bg-emerald-200"></div>
              </div>

              <h2 className="text-slate-900 text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] mb-8">
                {slides[current].title}
              </h2>

              <p className="text-slate-600 text-lg md:text-xl max-w-md font-normal leading-relaxed mb-10">
                {slides[current].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <button className="relative group px-10 py-5 bg-slate-900 overflow-hidden rounded-full transition-all shadow-xl shadow-slate-200">
                  <span className="relative z-10 text-white font-bold uppercase text-xs tracking-[0.2em] group-hover:text-white">
                    Explore Now
                  </span>
                  <div className="absolute inset-0 bg-emerald-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>

                <button className="flex items-center gap-3 text-slate-500 hover:text-emerald-700 transition-colors group">
                  <span className="h-[2px] w-8 bg-slate-300 group-hover:bg-emerald-500 transition-all"></span>
                  <span className="uppercase text-[11px] font-bold tracking-widest">
                    Discover Care Guide
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 order-1 lg:order-2">
            <div
              className={`relative transition-all duration-1000 ease-out transform ${animating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-slate-100 rounded-[2rem] -z-10"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300 mx-auto max-w-2xl">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[5s] hover:scale-105"
                />

                {/* Glass Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-white/70 border border-white/40 rounded-xl shadow-lg hidden sm:block">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-emerald-700 text-[10px] font-bold tracking-[0.2em] uppercase block mb-1">
                        Botanical Class
                      </span>
                      <h3 className="text-slate-900 text-xl font-bold">
                        {slides[current].tag}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">
                        Maintenance
                      </span>
                      <p className="text-slate-800 font-semibold">
                        {slides[current].difficulty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 flex items-center gap-8 z-50 bg-white/50 backdrop-blur-md p-4 rounded-full border border-slate-100 shadow-sm">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => !animating && setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
            />
          ))}
        </div>

        <div className="flex gap-3 h-10 items-center border-l border-slate-200 pl-8">
          <button
            onClick={() =>
              !animating &&
              setCurrent(prev => (prev - 1 + slides.length) % slides.length)
            }
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
          >
            ←
          </button>
          <button
            onClick={() => !animating && nextSlide()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-emerald-600 transition-all shadow-md"
          >
            →
          </button>
        </div>
      </div>

      {/* Vertical Side Tag */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-180 [writing-mode:vertical-lr] hidden xl:flex items-center gap-4">
        <span className="text-slate-300 text-[10px] font-bold tracking-[0.5em] uppercase">
          Est. MMXXVI
        </span>
        <div className="w-[1px] h-12 bg-slate-200"></div>
      </div>
    </div>
  );
};

export default AdvancedBanner;
