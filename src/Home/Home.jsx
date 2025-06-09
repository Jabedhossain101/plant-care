import React from 'react';
import { useLoaderData } from 'react-router';
import AllPlant from '../Components/AllPlant';
import Banner from '../Components/Banner';
import Lottie from 'lottie-react';

const Home = () => {
  const mangos = useLoaderData();
  console.log(mangos);

  return (
    <div>
      <div className="mb-5">
        <Banner></Banner>
      </div>
      <div className="m-5 shadow-2xl p-2">
        <h1 className="text-center text-bold text-2xl underline">
          The Power and Purpose of Plants
        </h1>
        <p className="m-3 text-gray-600">
          Plants are an essential part of our ecosystem, playing a vital role in
          maintaining the balance of nature. They absorb carbon dioxide and
          release oxygen, which is crucial for the survival of all living
          beings. Beyond their role in air purification, plants also prevent
          soil erosion, regulate the water cycle, and provide habitat and food
          for countless species. Indoor and outdoor plants bring beauty and
          calmness to our surroundings, helping to reduce stress and promote
          mental well-being. Moreover, many plants have medicinal properties and
          are used in traditional and modern medicine. By caring for plants, we
          not only support the environment but also create a greener, healthier
          future for the next generation.
        </p>
      </div>

      <h1 className="text-center text-2xl text-violet-600 underline">
        Explore our <span className="text-fuchsia-500">Plant House</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mangos.map(mango => (
          <AllPlant key={mango._id} mango={mango} />
        ))}
      </div>
      <div className="m-5 shadow-2xl p-2">
        <h1 className="text-center text-bold text-2xl underline">
          Top Plant Care Mistakes to Avoid
        </h1>
        <p>
          <span className="font-bold">1.Overwatering:</span> <br />
          Too much water can lead to root rot. Always check the soil before
          watering. <br />
          <span className="font-bold">2. Wrong Lighting :</span>
          <br /> Not all plants need direct sunlight. Understand your plant’s
          light preference—some thrive in shade, others in bright light. <br />
          <span className="font-bold">3.Ignoring Pest Signs :</span> <br />{' '}
          Discolored leaves, sticky residue, or visible bugs are signs of
          infestation. Regularly inspect your plants and treat pests early.{' '}
          <br />
          <span className="font-bold">4.Using the Wrong Soil : </span>
          <br />
          Different plants require different soil types. For example, succulents
          need well-draining soil, while ferns prefer moist, rich soil. <br />
          <span className="font-bold">5.Not Repotting:</span> <br /> If roots
          start growing out of the pot or the plant seems stunted, it’s time to
          repot to a larger container.
        </p>
      </div>
    </div>
  );
};

export default Home;
