import React, { useState } from 'react';

const faqData = [
  {
    category: 'Maintenance',
    question: 'How often should I water my plants?',
    answer:
      'Watering frequency depends on the plant type and environment. Most indoor plants prefer their soil to dry out slightly between waterings. A good rule of thumb: finger-test the top inch of soil.',
  },
  {
    category: 'Placement',
    question: 'What is the best spot for my indoor plants?',
    answer:
      'Most indoor plants thrive in bright, indirect sunlight. Avoid placing them in direct sun unless they are sun-loving varieties like succulents or cacti, which can handle intense rays.',
  },
  {
    category: 'Growth',
    question: 'How do I know if my plant needs repotting?',
    answer:
      "If roots are growing out of the drainage holes or the plant looks stunted despite regular care, it's time to move into a container that is 1-2 inches larger in diameter.",
  },
  {
    category: 'Health',
    question: 'What should I do if I see pests on my plant?',
    answer:
      'Isolate the affected plant immediately. Gently wipe leaves with a damp cloth and use natural neem oil or insecticidal soap. Check nearby plants to prevent a full outbreak.',
  },
  {
    category: 'Hydration',
    question: 'Can I use tap water for my plants?',
    answer:
      'Yes, but let it sit overnight to allow chlorine to evaporate. Sensitive species like Calatheas may require filtered or rain water to avoid brown leaf tips.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open for better UI

  return (
    <section className="relative bg-[#fcfcf9] py-32 overflow-hidden font-sans">
      {/* Decorative Background Text */}
      <div className="absolute bottom-10 right-10 pointer-events-none z-0 opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-black leading-none">HELP</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-12 gap-12">
          {/* Left Side: Header */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-emerald-700 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                  Support Center
                </span>
                <div className="h-[1px] w-12 bg-emerald-200"></div>
              </div>
              <h2 className="text-slate-900 text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-8">
                Common <br />
                <span className="text-emerald-600/80 italic font-serif font-light">
                  Questions.
                </span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-sm">
                Everything you need to know about keeping your green companions
                happy and healthy.
              </p>

              <div className="hidden lg:block">
                <div className="inline-flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">
                      Still have questions?
                    </p>
                    <button className="text-emerald-600 text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-colors">
                      Contact Support →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`group transition-all duration-500 rounded-[2rem] overflow-hidden ${
                    isOpen
                      ? 'bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border-transparent'
                      : 'bg-transparent border border-slate-200/60 hover:border-emerald-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-8 py-10 text-left transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-mono text-xs font-bold transition-colors duration-500 ${
                          isOpen ? 'text-emerald-600' : 'text-slate-300'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <span
                          className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 block transition-opacity duration-500 ${
                            isOpen
                              ? 'opacity-100 text-emerald-700/50'
                              : 'opacity-0'
                          }`}
                        >
                          {item.category}
                        </span>
                        <h3
                          className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                            isOpen ? 'text-slate-900' : 'text-slate-600'
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`relative w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? 'bg-slate-900 border-slate-900 rotate-45'
                          : 'bg-transparent border-slate-200'
                      }`}
                    >
                      <div
                        className={`w-3 h-[2px] bg-current absolute transition-colors ${isOpen ? 'text-white' : 'text-slate-400'}`}
                      ></div>
                      <div
                        className={`w-[2px] h-3 bg-current absolute transition-colors ${isOpen ? 'text-white' : 'text-slate-400'}`}
                      ></div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-10 ml-14 border-t border-slate-50 pt-6">
                      <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                        {item.answer}
                      </p>
                      <div className="mt-8 flex gap-4">
                        <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-slate-900 transition-colors">
                          Learn More
                        </button>
                        <button className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
