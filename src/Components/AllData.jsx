import React from 'react';
import { useLoaderData } from 'react-router';

const AllData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        <h1>This is update page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {data.map(singleData => (
            <MyPlant key={singleData._id} singleData={singleData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllData;
