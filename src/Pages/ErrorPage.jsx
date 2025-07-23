import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4 text-center relative overflow-hidden">
      {/* Decorative plant emoji */}
      <span className="absolute -top-10 -left-10 text-[8rem] opacity-10 select-none pointer-events-none">
        🌱
      </span>
      <span className="absolute -bottom-10 -right-10 text-[7rem] opacity-10 select-none pointer-events-none">
        🪴
      </span>
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 md:p-16 max-w-lg w-full flex flex-col items-center">
        <img
          src="https://i.ibb.co/27ZK4c5R/images.jpg"
          alt="Error Illustration"
          className="w-40 md:w-56 mb-6 drop-shadow-lg animate-bounce-slow"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-2 drop-shadow">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="mb-8 text-gray-700 text-base md:text-lg">
          Sorry, the page you’re looking for doesn’t exist or an unexpected
          error has occurred.
          <br />
          Let’s get you back to the garden!
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-lg shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
