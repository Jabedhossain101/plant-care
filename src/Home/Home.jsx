import { useLoaderData } from 'react-router';
import AllPlant from '../Components/AllPlant';

import Information from './Information';
import Purpose from './Purpose';
import Faq from './Faq';
import AdvancedBanner from '../Components/Banner';

const Home = () => {
  const mangos = useLoaderData();

  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      {/* Hero Section */}
      <section className="mb-20">
        <AdvancedBanner />
      </section>

      {/* Brand Narrative Section */}
      <section className="mb-20">
        <Purpose />
      </section>

      {/* Main Product Gallery */}
      <section className="relative py-24 bg-white/50 backdrop-blur-sm border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header - Styled like your Banner */}
          <div className="mb-16 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="text-emerald-700 font-mono text-xs font-bold tracking-[0.4em] uppercase">
                Curated Collection
              </span>
              <div className="h-[1px] w-12 bg-emerald-200"></div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Explore our <br />
                <span className="text-emerald-600 italic font-serif font-light underline decoration-emerald-200 decoration-4 underline-offset-8">
                  Plant House
                </span>
              </h2>

              <p className="text-slate-500 max-w-sm text-sm md:text-base font-medium leading-relaxed">
                Hand-picked botanical wonders, grown with care and ready to
                transform your living spaces into green sanctuaries.
              </p>
            </div>
          </div>

          {/* Product Grid - Enhanced for Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {mangos.map((mango, index) => (
              <div
                key={mango._id}
                className="transform transition-all duration-700 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 50}ms` }} // Staggered entrance feel
              >
                <AllPlant mango={mango} />
              </div>
            ))}
          </div>

          {/* View All / Load More - Optional Visual Hook */}
          <div className="mt-16 text-center">
            <div className="inline-block h-[1px] w-24 bg-slate-200 align-middle"></div>
            <span className="mx-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              End of Collection
            </span>
            <div className="inline-block h-[1px] w-24 bg-slate-200 align-middle"></div>
          </div>
        </div>
      </section>

      {/* Expert Tips Section */}
      <section>
        <Information />
      </section>

      {/* Support Section */}
      <section>
        <Faq />
      </section>

      {/* Final Floating CTA - Premium Touch */}
      <div className="fixed bottom-8 right-8 z-[100] hidden md:block">
        <button className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group">
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            Chat with Botanist
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
