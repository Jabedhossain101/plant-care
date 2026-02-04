import React from 'react';

const Purpose = () => {
  return (
    <section className="relative bg-[#fcfcf9] py-32 overflow-hidden font-sans">
      {/* Background Kinetic Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] select-none">
        <h2 className="text-[25vw] font-black leading-none">NATURE</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left Side: Visual Element */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative group">
              {/* Main Decorative Frame */}
              <div className="absolute -inset-4 border border-emerald-100 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>

              {/* Image Container with Custom Shape */}
              <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-900/10">
                <img
                  src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1000&auto=format&fit=crop"
                  alt="Nature Purpose"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]"
                />

                {/* Floating Glass Stat Card */}
                <div className="absolute bottom-10 -right-4 md:right-10 p-8 backdrop-blur-2xl bg-white/80 border border-white/50 rounded-3xl shadow-xl max-w-[240px]">
                  <span className="text-emerald-600 text-4xl font-black block mb-2">
                    98%
                  </span>
                  <p className="text-slate-800 text-sm font-bold leading-tight uppercase tracking-tight">
                    Of air toxins reduced in botanical-rich spaces.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-span-12 lg:col-span-6 lg:pl-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-emerald-700 font-mono text-sm font-bold tracking-[0.4em] uppercase">
                Our Philosophy
              </span>
              <div className="h-[1px] w-12 bg-emerald-200"></div>
            </div>

            <h2 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
              The Power & <br />
              <span className="text-emerald-600 italic font-serif font-light">
                Purpose of Life.
              </span>
            </h2>

            <div className="space-y-8">
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                Plants are the silent architects of our ecosystem. They don't
                just occupy space; they
                <span className="text-slate-900 font-bold italic">
                  {' '}
                  breathe life{' '}
                </span>
                into our homes by filtering toxins and regulating the very air
                we consume.
              </p>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
                <div>
                  <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-3">
                    Eco-Balance
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Preventing soil erosion and maintaining natural water
                    cycles.
                  </p>
                </div>
                <div>
                  <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-3">
                    Well-being
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Reducing cortisol levels and promoting profound mental
                    clarity.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 mb-10">
                  <p className="text-slate-800 text-lg font-bold italic leading-snug">
                    "By caring for plants, we create a greener, healthier future
                    for the next generation."
                  </p>
                </blockquote>

                <button className="group relative px-8 py-4 bg-slate-900 text-white overflow-hidden rounded-full transition-all">
                  <span className="relative z-10 font-bold text-xs uppercase tracking-widest group-hover:text-white">
                    Join the Movement
                  </span>
                  <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
