import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { format } from 'date-fns';

const AllPlant = ({ mango }) => {
  const { _id, Photo, Plant, wateringFrequency, careLevel, description } =
    mango;
  const today = new Date();
  const formatted = format(today, 'PPP');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
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
    <div className="card bg-sky-300 m-6 w-96 mx-auto shadow-sm">
      <p className="text-sm mt-1">{`Today is: ${formatted}`}</p>

      <figure>
        <img
          className="h-[260px] w-[260px] mt-2 rounded-2xl bg-blue-500"
          src={Photo}
          alt="Plant"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {Plant}
          <div className="badge badge-success text-gray-800">{careLevel}</div>
        </h2>
        <p className="text-gray-600">{description}</p>

        <div className="card-actions justify-end">
          <div className="badge badge-secondary">{wateringFrequency}</div>
        </div>

        <Link
          to={`/plantDetails/${_id}`}
          className="btn bg-fuchsia-600 hover:bg-red-500 hover:text-xl hover:p-2"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default AllPlant;
