import React, { useEffect, useState } from 'react';

const images = [
  'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
  'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
  'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
  'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition duration-1000"
      />

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold drop-shadow-lg">
          Welcome to Plant World
        </h1>
        <p className="text-lg mt-2 drop-shadow-md">
          Grow your green friends with love 🌿
        </p>
        <button className="mt-4 btn btn-primary">Explore Plants</button>
      </div>

      {/* Navigation buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2 transform z-20">
        <button onClick={goToPrevious} className="btn btn-circle">
          ❮
        </button>
        <button onClick={goToNext} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
