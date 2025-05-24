import React from 'react';
import { useLoaderData } from 'react-router';
import MyPlant from './MyPlant';

const UpdateMango = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>This is update page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {data.map(singleData => (
          <MyPlant key={singleData._id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default UpdateMango;
