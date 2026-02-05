import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllOpen = ({ singleData }) => {
  const { _id, Photo, Plant, wateringFrequency, careLevel, description } =
    singleData;
  const today = new Date();
  const formattedDate = format(today, 'MMM dd, yyyy');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="w-full aspect-[3/4] bg-slate-50 animate-pulse rounded-[2rem] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-emerald-100 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
      {/* 1. Date Badge & Care Level */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-50">
          {formattedDate}
        </span>
        <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-widest">
          {careLevel}
        </span>
      </div>

      {/* 2. Image Section */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
          src={Photo}
          alt={Plant}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
      </div>

      {/* 3. Content Section */}
      <div className="p-8">
        <div className="mb-4">
          <span className="text-emerald-700 font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
            Archive Entry
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tighter leading-tight mt-1 group-hover:text-emerald-600 transition-colors">
            {Plant}
          </h2>
        </div>

        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-6 font-medium">
          {description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
              Hydration
            </span>
            <span className="text-[11px] font-bold text-slate-700">
              {wateringFrequency}
            </span>
          </div>

          <Link
            to={`/plantDetails/${_id}`}
            className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-500"
          >
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Background Kinetic Detail */}
      <div className="absolute top-1/2 -right-6 pointer-events-none opacity-[0.02] select-none group-hover:opacity-[0.05] transition-opacity">
        <h3 className="text-7xl font-black rotate-90 uppercase">BOTANY</h3>
      </div>
    </div>
  );
};

export default AllOpen;
