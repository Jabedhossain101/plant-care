import React from 'react';
import { useLoaderData } from 'react-router';
import AllOpen from './AllOpen';
// import { useLoaderData } from 'react-router';

const AllData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data.map(singleData => (
            <AllOpen
              key={singleData._id} singleData={singleData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllData;
