import React from 'react';

const Purpose = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="bg-gradient-to-br from-green-100 via-white to-green-50 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative Leaf Icon */}
        <div className="absolute -top-8 -left-8 opacity-20 text-green-300 text-[8rem] pointer-events-none select-none">
          🌿
        </div>
        <div className="absolute -bottom-8 -right-8 opacity-10 text-green-200 text-[7rem] pointer-events-none select-none">
          🪴
        </div>
        <h1 className="text-center font-extrabold text-3xl md:text-4xl text-green-800 mb-6 underline decoration-green-400">
          The Power and Purpose of Plants
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
          Plants are an essential part of our ecosystem, playing a vital role in
          maintaining the balance of nature. They absorb carbon dioxide and
          release oxygen, which is crucial for the survival of all living
          beings. Beyond their role in air purification, plants also prevent
          soil erosion, regulate the water cycle, and provide habitat and food
          for countless species.
          <br />
          <br />
          Indoor and outdoor plants bring beauty and calmness to our
          surroundings, helping to reduce stress and promote mental well-being.
          Moreover, many plants have medicinal properties and are used in
          traditional and modern medicine.
          <span className="block mt-4 font-semibold text-green-700">
            By caring for plants, we not only support the environment but also
            create a greener, healthier future for the next generation.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Purpose;
