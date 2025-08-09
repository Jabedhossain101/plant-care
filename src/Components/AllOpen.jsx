import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllOpen = ({ singleData }) => {
  const { _id, Photo, Plant, wateringFrequency, careLevel, description } =
    singleData;
  const today = new Date();
  const formatted = format(today, 'PPP');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 400);
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
    <>
      <div className="card bg-base-400 m-6 w-[200px] mx-auto shadow-lg hover:shadow-2xl shadow-md">
        <p className="text-sm mt-1 ml-2">{`Today is: ${formatted}`}</p>

        <figure>
          <img
            className="h-[70px] w-[70px] mt-2 rounded-2xl bg-none"
            src={Photo}
            alt="Plant"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {Plant}
            <div className="btn text-gray-500">{careLevel}</div>
          </h2>
          <p className="text-gray-600">{description}</p>

          <div className="card-actions justify-end">
            <div className="badge badge-accent">{wateringFrequency}</div>
          </div>

          <Link
            to={`/plantDetails/${_id}`}
            className="btn "
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllOpen;
