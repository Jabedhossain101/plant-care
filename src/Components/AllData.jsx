import React from 'react';
import { useLoaderData } from 'react-router';
import All from './All';

const AllData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map(singleData => (
            <All key={singleData._id} singleData={singleData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllData;
