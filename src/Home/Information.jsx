import React from 'react';

const tips = [
  {
    title: 'Overwatering',
    icon: '💧',
    desc: 'Too much water can lead to root rot. Always check the soil before watering.',
    tag: 'Hydration',
    serial: '01',
  },
  {
    title: 'Wrong Lighting',
    icon: '🌞',
    desc: 'Not all plants need direct sunlight. Understand your plant’s light preference.',
    tag: 'Exposure',
    serial: '02',
  },
  {
    title: 'Ignoring Pests',
    icon: '🐛',
    desc: 'Discolored leaves or sticky residue are signs of infestation. Inspect regularly.',
    tag: 'Protection',
    serial: '03',
  },
  {
    title: 'Wrong Soil',
    icon: '🌱',
    desc: 'Different plants require different soil. Succulents need well-draining soil.',
    tag: 'Foundation',
    serial: '04',
  },
  {
    title: 'Not Repotting',
    icon: '🪴',
    desc: 'If roots start growing out of the pot, it’s time to move to a larger container.',
    tag: 'Growth',
    serial: '05',
  },
];

const Information = () => {
  return (
    <section className="relative bg-[#fcfcf9] py-32 overflow-hidden font-sans">
      {/* Background Kinetic Typography - Like the Banner */}
      <div className="absolute top-20 left-10 pointer-events-none z-0 opacity-[0.03] select-none">
        <h2 className="text-[15vw] font-black leading-none">CARE</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-700 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                Expert Insights
              </span>
              <div className="h-[1px] w-12 bg-emerald-200"></div>
            </div>
            <h2 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Common Plant <br />
              <span className="text-emerald-600/80 italic font-serif font-light">
                Care Mistakes.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-xs border-l-2 border-emerald-100 pl-6 py-2">
            Professional tips to ensure your botanical companions thrive in any
            environment.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-100 p-10 rounded-[3rem] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full"
            >
              {/* Floating Serial Number */}
              <span className="absolute top-8 right-10 text-slate-100 font-black text-6xl group-hover:text-emerald-50 transition-colors duration-500">
                {tip.serial}
              </span>

              <div className="relative z-10">
                {/* Icon with Glass Effect */}
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-sm">
                  {tip.icon}
                </div>

                <span className="inline-block text-emerald-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 bg-emerald-50 rounded-full">
                  {tip.tag}
                </span>

                <h3 className="text-slate-900 text-2xl font-bold mb-4 tracking-tight">
                  {tip.title}
                </h3>

                <p className="text-slate-500 leading-relaxed font-medium mb-6">
                  {tip.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-auto pt-6 flex items-center gap-2 text-slate-400 group-hover:text-emerald-600 transition-colors cursor-pointer">
                <span className="text-[11px] font-bold uppercase tracking-widest">
                  Read Solution
                </span>
                <div className="h-[1px] w-0 group-hover:w-8 bg-emerald-500 transition-all duration-500"></div>
              </div>
            </div>
          ))}

          {/* Advanced CTA Card */}
          <div className="group relative bg-slate-900 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center overflow-hidden min-h-[400px]">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.3),transparent)] group-hover:scale-110 transition-transform duration-1000"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:border-emerald-500/50 transition-colors">
                <span className="text-white text-2xl">🌿</span>
              </div>

              <h3 className="text-white text-3xl font-bold mb-4 tracking-tight leading-tight">
                Still unsure <br /> about your plant?
              </h3>

              <p className="text-slate-400 text-sm mb-10 px-4">
                Our botanists are ready to provide custom care schedules.
              </p>

              <button className="px-10 py-5 bg-white text-slate-900 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all shadow-2xl">
                Consult Expert
              </button>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all"></div>
          </div>
        </div>
      </div>

      {/* Side Label - Matching Banner Style */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] hidden xl:flex items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-slate-900"></div>
        <span className="text-slate-900 text-[10px] font-bold tracking-[0.5em] uppercase">
          CARE PROTOCOLS
        </span>
      </div>
    </section>
  );
};

export default Information;
