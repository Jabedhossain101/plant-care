import React from 'react';

const AllPlant = ({ mango }) => {
  const { Photo, Plant, wateringFrequency, careLevel, description } = mango;

  return (
    <div>
      <div className="card bg-sky-300 m-6 w-96 mx-auto shadow-sm">
        <figure>
          <img
            className="h-[260px] w-[260px] mt-2 rounded-2xl bg-blue-500"
            src={Photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {Plant}
            <div className="badge badge-success text-gray-800">{careLevel}</div>
          </h2>
          <p className="text-gray-600">{description}</p>
          <div className="card-actions justify-end">
            <div
              className="badge badge-secondary
            "
            >
              {wateringFrequency}
            </div>
          </div>
          <button className="btn bg-fuchsia-600 hover:bg-red-500 hover:text-2xl hover:p-6">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPlant;
