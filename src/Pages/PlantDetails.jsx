import React from 'react';

import { useLoaderData } from 'react-router';

const PlantDetails = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <h1>View more details</h1>
    </div>
  );
};

export default PlantDetails;
