import React, { useState } from 'react';

const faqData = [
  {
    question: 'How often should I water my plants?',
    answer:
      'Watering frequency depends on the plant type and environment. Most indoor plants prefer their soil to dry out slightly between waterings. Always check the soil before watering.',
  },
  {
    question: 'What is the best spot for my indoor plants?',
    answer:
      'Most indoor plants thrive in bright, indirect sunlight. Avoid placing them in direct sun unless they are sun-loving varieties like succulents or cacti.',
  },
  {
    question: 'How do I know if my plant needs repotting?',
    answer:
      "If roots are growing out of the drainage holes or the plant looks stunted, it's time to repot into a slightly larger container.",
  },
  {
    question: 'What should I do if I see pests on my plant?',
    answer:
      'Isolate the affected plant and gently wipe leaves with a damp cloth. Use natural insecticidal soap if needed, and check nearby plants for signs of pests.',
  },
  {
    question: 'Can I use tap water for my plants?',
    answer:
      'Most plants are fine with tap water, but let it sit overnight to allow chlorine to dissipate. Some sensitive plants may prefer filtered or rain water.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-7xl mx-auto my-12 px-4">
      <div className=" rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-green-800 mb-8 underline decoration-green-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white shadow-md transition-all duration-300"
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-semibold text-green-700 text-lg">
                  {item.question}
                </span>
                <span
                  className={`ml-4 text-2xl transition-transform duration-300 ${
                    openIndex === idx
                      ? 'rotate-180 text-green-500'
                      : 'text-green-300'
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 text-base transition-all duration-300 ${
                  openIndex === idx ? 'block' : 'hidden'
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
