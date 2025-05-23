import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Oops! Something went wrong.
      </h1>
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Page Not found</h1>
      <img
        src="https://i.ibb.co/27ZK4c5R/images.jpg"
        alt="Error Illustration"
        className="w-full max-w-md rounded shadow-md"
      />
      <p className="mt-6 text-lg text-gray-700">
        We’re sorry, but the page you’re looking for doesn’t exist or an
        unexpected error has occurred.
      </p>
      <Link to={'/'} className="btn">
        GO HOME
      </Link>
    </div>
  );
};

export default ErrorPage;
