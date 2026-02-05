import React from 'react';
import { useLoaderData } from 'react-router';
import AllOpen from './AllOpen';

const AllData = () => {
  const data = useLoaderData();

  return (
    <div className="bg-[#fcfcf9] min-h-screen py-24 relative overflow-hidden font-sans">
      {/* 1. Background Kinetic Typography */}
      <div className="absolute top-40 left-0 pointer-events-none z-0 opacity-[0.02] select-none text-slate-900">
        <h2 className="text-[20vw] font-black leading-none uppercase">
          EXHIBIT
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* 2. Editorial Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8 border-b border-slate-100 pb-16">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-700 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                Complete Index
              </span>
              <div className="h-[1px] w-12 bg-emerald-200"></div>
            </div>
            <h2 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              The Botanical <br />
              <span className="text-emerald-600 italic font-serif font-light">
                Archive.
              </span>
            </h2>
          </div>

          <div className="lg:text-right text-left">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
              Total Collection
            </p>
            <span className="text-6xl font-black text-slate-200">
              {data.length.toString().padStart(2, '0')}
            </span>
            <p className="text-slate-500 text-sm mt-4 max-w-[200px] lg:ml-auto leading-relaxed">
              Every specimen is meticulously documented for our global database.
            </p>
          </div>
        </div>

        {/* 3. Responsive Gallery Grid 
            - grid-cols-1: Mobile
            - md:grid-cols-2: Tablet
            - lg:grid-cols-3: Large Desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {data.map((singleData, index) => (
            <div
              key={singleData._id}
              className="transform transition-all duration-700 hover:-translate-y-3"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <AllOpen singleData={singleData} />
            </div>
          ))}
        </div>

        {/* 4. End of Archive Hook */}
        <div className="mt-40 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="h-20 w-[1px] bg-gradient-to-b from-emerald-500 to-transparent"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
              End of Digital Archive
            </span>
          </div>
        </div>
      </div>

      {/* Side Label - Branding */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] hidden xl:flex items-center gap-6 opacity-20">
        <div className="w-[1px] h-16 bg-slate-900"></div>
        <span className="text-slate-900 text-[10px] font-black tracking-[0.6em] uppercase">
          ARCHIVE VOL. I
        </span>
      </div>
    </div>
  );
};

export default AllData;
