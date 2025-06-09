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
    <>
      <div className="card bg-base-400 m-6 w-96 mx-auto shadow-lg hover:shadow-2xl">
        <p className="text-sm mt-1 ml-2">{`Today is: ${formatted}`}</p>

        <figure>
          <img
            className="h-[260px] w-[260px] mt-2 rounded-2xl bg-none"
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
            className="btn bg-violet-600 hover:bg-violet-800  hover:p-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllPlant;
