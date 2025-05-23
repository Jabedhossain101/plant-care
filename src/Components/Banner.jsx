import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: 'https://i.ibb.co/hxFGLXLY/banner2.jpg',
    title: 'Welcome to Plant World',
    subtitle: 'Grow your green friends with love ',
  },
  {
    image: 'https://i.ibb.co/HL2Nh8R9/Bannertwo.jpg',
    title: 'Nature at Your Fingertips',
    subtitle: 'Explore our collection of indoor plants ',
  },
  {
    image: 'https://i.ibb.co/27JrBd2z/banner3.jpg',
    title: 'Fresh Air, Fresh Life',
    subtitle: 'Bring the jungle into your home ',
  },
  {
    image: 'https://i.ibb.co/5WDJqcLw/banner4.jpg',
    title: 'Beauty in Every Leaf',
    subtitle: 'Discover rare and exotic plants ',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % slides.length);
        setAnimate(true);
      }, 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
      setAnimate(true);
    }, 50);
  };

  const goToNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
      setAnimate(true);
    }, 50);
  };

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black">
      {/* Image with slide-in from right */}
      <img
        src={image}
        alt={`Slide ${currentIndex + 1}`}
        className={`w-full h-full object-cover transition-all duration-1000 ease-in-out 
        ${
          animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      />

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-red-400">
        <h1 className="text-4xl font-bold drop-shadow-lg">{title}</h1>
        <p className="text-lg mt-2 drop-shadow-md">{subtitle}</p>
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2 transform z-20">
        <button onClick={goToPrevious} className="text-black">
          ❮
        </button>
        <button onClick={goToNext} className="text-blue-800">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
