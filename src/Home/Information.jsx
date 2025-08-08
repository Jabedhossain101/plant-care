import React from 'react';

const tips = [
  {
    title: 'Overwatering',
    icon: '💧',
    desc: 'Too much water can lead to root rot. Always check the soil before watering.',
  },
  {
    title: 'Wrong Lighting',
    icon: '🌞',
    desc: 'Not all plants need direct sunlight. Understand your plant’s light preference—some thrive in shade, others in bright light.',
  },
  {
    title: 'Ignoring Pest Signs',
    icon: '🐛',
    desc: 'Discolored leaves, sticky residue, or visible bugs are signs of infestation. Regularly inspect your plants and treat pests early.',
  },
  {
    title: 'Using the Wrong Soil',
    icon: '🌱',
    desc: 'Different plants require different soil types. For example, succulents need well-draining soil, while ferns prefer moist, rich soil.',
  },
  {
    title: 'Not Repotting',
    icon: '🪴',
    desc: 'If roots start growing out of the pot or the plant seems stunted, it’s time to repot to a larger container.',
  },
];

const Information = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4">
      <div className="bg-gradient-to-br from-green-100 via-green-50 to-white rounded-3xl shadow-2xl p-6 md:p-10">
        <h1 className="text-center font-extrabold text-3xl md:text-4xl text-green-800 mb-8 underline decoration-green-400">
          Top Plant Care Mistakes to Avoid
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="flex items-start bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-200"
            >
              <span className="text-3xl md:text-4xl mr-4">{tip.icon}</span>
              <div>
                <h2 className="font-bold text-lg text-green-700 mb-1">
                  {idx + 1}. {tip.title}
                </h2>
                <p className="text-gray-700">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
