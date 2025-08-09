import React from 'react';
import { useLoaderData } from 'react-router';
import MyPlant from './MyPlant';

const UpdateMango = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1.5">
        {data.map(singleData => (
          <MyPlant key={singleData._id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default UpdateMango;
