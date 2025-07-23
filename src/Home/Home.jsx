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
      <h1 className="text-center text-2xl text-violet-600 underline">
        Explore our <span className="text-fuchsia-500">Plant House</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
