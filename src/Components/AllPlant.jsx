import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { format } from 'date-fns';

const AllPlant = ({ mango }) => {
  const { _id, Photo, Plant } =
    mango;
  const today = new Date();
  const formatted = format(today, 'PPP');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto m-6">
      <div className="w-[200px] h-[190px] relative rounded-2xl shadow-xl hover:shadow-green-200 transition-shadow duration-300 overflow-hidden group">
        {/* Decorative leaf icon */}
        <span className="absolute top-3 right-3 text-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none pointer-events-none">
          🌱
        </span>
        <p className="text-xs mt-3 ml-4 text-gray-400">{`Today is: ${formatted}`}</p>
        <figure className="flex justify-center">
          <img
            className="h-20 w-20 mt-2 rounded-2xl object-cover shadow-lg border-4 border-white group-hover:scale-115 transition-transform duration-300"
            src={Photo}
            alt="Plant"
          />
        </figure>
        <div className="p-5">
          <h2 className="text-sm font-extrabold text-green-800 flex items-center gap-2 mb-2">
            {Plant}
            <Link
              to={`/plantDetails/${_id}`}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white p-1 text-center rounded-xl shadow hover:from-green-500 hover:to-green-700 transition-all duration-200"
            >
              View Details
            </Link>
          </h2>
          {/* <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
              {wateringFrequency}
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllPlant;
