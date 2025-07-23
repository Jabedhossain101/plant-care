import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: 'https://i.ibb.co/MDtH6SRj/image.png',
    title: 'Welcome to Plant World',
    subtitle: 'Grow your green friends with love ',
  },
  {
    image: 'https://i.ibb.co/5X8pRsHY/image.png',
    title: 'Nature at Your Fingertips',
    subtitle: 'Explore our collection of indoor plants ',
  },
  {
    image: 'https://i.ibb.co/RTMG8Jm1/image.png',
    title: 'Fresh Air, Fresh Life',
    subtitle: 'Bring the jungle into your home ',
  },
  {
    image: 'https://i.ibb.co/5XgQxnc0/image.png',
    title: 'Beauty in Every Leaf',
    subtitle: 'Discover rare and exotic plants ',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentIndex]);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
      setAnimate(true);
    }, 200);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
      setAnimate(true);
    }, 200);
  };

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-green-200 via-white to-green-100 rounded-3xl shadow-2xl my-6">
      {/* Slide Image with fade/slide animation */}
      <img
        src={image}
        alt={`Slide ${currentIndex + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
          ${
            animate
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-10 scale-105'
          }
        `}
        style={{ zIndex: 1 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 z-10" />

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-2 transition-all duration-700
            ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }
          `}
        >
          {title}
        </h1>
        <p
          className={`text-lg md:text-2xl text-green-100 font-medium drop-shadow-md transition-all duration-700
            ${
              animate
                ? 'opacity-100 translate-y-0 delay-100'
                : 'opacity-0 translate-y-10'
            }
          `}
        >
          {subtitle}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-green-200 text-green-700 rounded-full p-2 shadow-lg transition-all duration-200"
        aria-label="Previous Slide"
      >
        <span className="text-3xl">❮</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-green-200 text-green-700 rounded-full p-2 shadow-lg transition-all duration-200"
        aria-label="Next Slide"
      >
        <span className="text-3xl">❯</span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setAnimate(false);
              setTimeout(() => {
                setCurrentIndex(idx);
                setAnimate(true);
              }, 200);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white
              ${
                currentIndex === idx
                  ? 'bg-green-500 scale-125 shadow-lg'
                  : 'bg-white/70'
              }
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
