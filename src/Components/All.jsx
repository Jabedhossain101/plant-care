import React from 'react';
import { useLoaderData } from 'react-router';

const All = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src="https://i.ibb.co/TMfNzHMQ/photo.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Plant</h2>
        <p>
          Plants help maintain environmental balance and bring mental peace.
          With daily care, they not only grow but also add a touch of greenery
          and calmness to our lives. In every plant, we find the beauty and
          serenity of life.
        </p>
      </div>
    </div>
  );
};

export default All;
