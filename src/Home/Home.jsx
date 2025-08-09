import { useLoaderData } from 'react-router';
import AllPlant from '../Components/AllPlant';
import Banner from '../Components/Banner';
import Lottie from 'lottie-react';
import Information from './Information';
import Purpose from './Purpose';
import Faq from './Faq';

const Home = () => {
  const mangos = useLoaderData();
  console.log(mangos);

  return (
    <div>
      <div className="mb-5">
        <Banner></Banner>
      </div>
      <Purpose></Purpose>
      <h1 className="text-center font-extrabold text-3xl md:text-4xl text-green-800 mb-6 underline decoration-green-400">
        Explore our <span>Plant House</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto my-6">
        {mangos.map(mango => (
          <AllPlant key={mango._id} mango={mango} />
        ))}
      </div>
      <Information></Information>
      <Faq></Faq>
    </div>
  );
};

export default Home;
