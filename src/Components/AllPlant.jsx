import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { format } from 'date-fns';

const AllPlant = ({ mango }) => {
  const { _id, Photo, Plant } = mango;
  const today = new Date();
  const formattedDate = format(today, 'MMM dd, yyyy');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="w-full aspect-[4/5] bg-slate-50 animate-pulse rounded-[2rem] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative bg-white border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2">
        {/* Top Tag & Date */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start">
          <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-emerald-700 border border-emerald-50">
            Botanical
          </span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
            {formattedDate}
          </span>
        </div>

        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
          <img
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            src={Photo}
            alt={Plant}
          />

          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Quick Action Button - Appears on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <Link
              to={`/plantDetails/${_id}`}
              className="px-6 py-3 bg-white text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-emerald-600 hover:text-white transition-all"
            >
              View Specimen
            </Link>
          </div>
        </div>

        {/* Info Area */}
        <div className="p-6 text-center">
          <div className="mb-1">
            <span className="text-[10px] font-bold text-emerald-600/50 uppercase tracking-[0.2em]">
              Species
            </span>
          </div>
          <h2 className="text-lg font-black text-slate-800 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
            {Plant}
          </h2>

          {/* Decorative Divider */}
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-4 bg-slate-100 group-hover:w-12 group-hover:bg-emerald-200 transition-all duration-700"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Serial (Subtle) */}
      <div className="absolute -bottom-4 -right-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <span className="text-4xl font-black text-slate-100 select-none">
          #ID-{_id.slice(-2)}
        </span>
      </div>
    </div>
  );
};

export default AllPlant;
