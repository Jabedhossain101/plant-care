import React from 'react';
import { useLoaderData } from 'react-router';
import AllPlant from '../Components/AllPlant';
import Banner from '../Components/Banner';
import PlantDetails from '../Pages/PlantDetails';

const Home = () => {
  const mangos = useLoaderData();
  console.log(mangos);
  return (
    <div>
      <div className="mb-5">
        <Banner></Banner>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {mangos.map(mango => (
          <AllPlant key={mango._id} mango={mango} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {mangos.map(mango => (
          <PlantDetails key={mango._id} mango={mango} />
        ))}
      </div>
    </div>
  );
};

export default Home;
