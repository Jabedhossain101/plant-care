import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { format } from 'date-fns';
import {
  Heart,
  MessageSquare,
  User,
  Calendar,
  Droplets,
  Activity,
} from 'lucide-react';

const PlantDetails = () => {
  const data = useLoaderData();
  const today = new Date();
  const formattedDate = format(today, 'PPP');

  const {
    Photo,
    Plant,
    careLevel,
    category,
    description,
    healthStatus,
    lastWateredDate,
    nextWateringDate,
    userEmail,
    userName,
    wateringFrequency,
    likes: initialLikes = 0,
  } = data;

  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLikeToggle = () => {
    setLikes(hasLiked ? likes - 1 : likes + 1);
    setHasLiked(!hasLiked);
  };

  const handleCommentSubmit = e => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment('');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] py-20 px-6 font-sans relative overflow-hidden">
      {/* 1. Kinetic Background Typography */}
      <div className="absolute top-10 left-10 pointer-events-none z-0 opacity-[0.02] select-none">
        <h2 className="text-[15vw] font-black leading-none uppercase">
          Specimen
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-12">
          {/* Left Side: Visual Showcase (7 Cols) */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-4 border border-slate-100 rounded-[3rem] -z-10 transition-transform duration-700 group-hover:scale-[1.02]"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white aspect-[4/5]">
                <img
                  src={Photo}
                  alt={Plant}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />

                {/* Status Overlay */}
                <div className="absolute bottom-10 left-10 flex gap-4">
                  <div className="px-6 py-3 backdrop-blur-xl bg-white/80 rounded-2xl border border-white/40 shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block mb-1">
                      Health Status
                    </span>
                    <p className="text-slate-900 font-bold">{healthStatus}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Technical Specs & Interactions (5 Cols) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col h-full">
            {/* Header & Description */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-emerald-700 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                  Botanical Identity
                </span>
                <div className="h-[1px] w-12 bg-emerald-200"></div>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                {Plant}
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed italic font-serif">
                "{description}"
              </p>
            </div>

            {/* Technical Data Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12 border-y border-slate-100 py-10">
              <div className="flex items-start gap-3">
                <Droplets className="text-emerald-500 w-5 h-5 mt-1" />
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                    Frequency
                  </span>
                  <p className="text-sm font-bold text-slate-800">
                    {wateringFrequency}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="text-emerald-500 w-5 h-5 mt-1" />
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                    Maintenance
                  </span>
                  <p className="text-sm font-bold text-slate-800">
                    {careLevel}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="text-emerald-500 w-5 h-5 mt-1" />
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                    Last Watered
                  </span>
                  <p className="text-sm font-bold text-slate-800">
                    {lastWateredDate}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="text-emerald-500 w-5 h-5 mt-1" />
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                    Curated By
                  </span>
                  <p className="text-sm font-bold text-slate-800">{userName}</p>
                </div>
              </div>
            </div>

            {/* Interactive Section: Likes & Community */}
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={handleLikeToggle}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-500 font-black text-xs uppercase tracking-widest ${
                    hasLiked
                      ? 'bg-rose-50 text-rose-500 shadow-rose-100 shadow-lg'
                      : 'bg-slate-900 text-white hover:bg-emerald-600'
                  }`}
                >
                  <Heart
                    fill={hasLiked ? 'currentColor' : 'none'}
                    className="w-4 h-4"
                  />
                  {hasLiked ? 'Acknowledged' : 'Appreciate'} ({likes})
                </button>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block">
                    Specimen ID
                  </span>
                  <span className="text-slate-900 font-mono font-bold">
                    #BOT-{formattedDate.slice(-2)}
                  </span>
                </div>
              </div>

              {/* Advanced Comment Module */}
              <div className="bg-slate-50 rounded-3xl p-8">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Journal Notes
                </h3>

                <form onSubmit={handleCommentSubmit} className="relative mb-8">
                  <input
                    type="text"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Log your observation..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 font-black text-[10px] uppercase tracking-widest"
                  >
                    Post
                  </button>
                </form>

                <ul className="space-y-4 max-h-[200px] overflow-y-auto custom-scrollbar">
                  {comments.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">
                      No community observations recorded yet.
                    </p>
                  ) : (
                    comments.map((cmt, idx) => (
                      <li
                        key={idx}
                        className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm animate-fade-in text-sm text-slate-600 leading-relaxed"
                      >
                        {cmt}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
