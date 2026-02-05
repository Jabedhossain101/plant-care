import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
  const data = useLoaderData();
  const {
    _id,
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
  } = data;

  const handleUpdatePlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    fetch(`https://simple-mango-server.vercel.app/mangos/${_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedPlant),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Registry Refined',
            text: 'Botanical data has been updated successfully.',
            icon: 'success',
            confirmButtonColor: '#059669',
            customClass: { popup: 'rounded-[2rem] font-sans' },
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] py-20 px-6 relative overflow-hidden font-sans flex items-center justify-center">
      {/* 1. Kinetic Background Text */}
      <div className="absolute bottom-10 right-10 pointer-events-none z-0 opacity-[0.02] select-none text-right">
        <h2 className="text-[18vw] font-black leading-none">REFINE</h2>
      </div>

      <div className="w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden relative z-10">
        <div className="grid grid-cols-12">
          {/* Left Side: Form Section (8 Cols) */}
          <div className="col-span-12 lg:col-span-8 p-8 md:p-16 order-2 lg:order-1">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-emerald-700 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                  Data Refinement
                </span>
                <div className="h-[1px] w-8 bg-emerald-200"></div>
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">
                Update Specimen.
              </h1>
              <p className="text-slate-400 text-sm">
                Modifying the botanical record for{' '}
                <span className="text-slate-900 font-bold">
                  #{_id.slice(-6)}
                </span>
              </p>
            </div>

            <form
              onSubmit={handleUpdatePlant}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
            >
              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2 text-left">
                  Plant Name
                </label>
                <input
                  type="text"
                  name="Plant"
                  defaultValue={Plant}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2 text-left">
                  Specimen Image URL
                </label>
                <input
                  type="text"
                  name="Photo"
                  defaultValue={Photo}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2 text-left">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium cursor-pointer"
                  required
                >
                  <option>Succulent</option>
                  <option>Fern</option>
                  <option>Flowering</option>
                  <option>Herb</option>
                  <option>Tree</option>
                </select>
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2 text-left">
                  Care Level
                </label>
                <select
                  name="careLevel"
                  defaultValue={careLevel}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium cursor-pointer"
                  required
                >
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Difficult</option>
                </select>
              </div>

              <div className="group col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2 text-left">
                  Botanical Description
                </label>
                <textarea
                  name="description"
                  rows={2}
                  defaultValue={description}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium resize-none"
                  required
                ></textarea>
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2 text-left">
                  Last Maintenance Date
                </label>
                <input
                  type="date"
                  name="lastWateredDate"
                  defaultValue={lastWateredDate}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium uppercase text-xs"
                  required
                />
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2 text-left">
                  Next Maintenance Date
                </label>
                <input
                  type="date"
                  name="nextWateringDate"
                  defaultValue={nextWateringDate}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium uppercase text-xs"
                  required
                />
              </div>

              <div className="col-span-2 pt-6">
                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Confirm Refinement
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Preview & Branding (4 Cols) */}
          <div className="col-span-12 lg:col-span-4 bg-slate-900 relative order-1 lg:order-2 overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <img
                src={Photo}
                alt="Preview"
                className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">
              <div>
                <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
                  Current Specimen
                </span>
                <h2 className="text-4xl font-black tracking-tighter leading-none mb-4">
                  {Plant}
                </h2>
                <div className="h-[1px] w-12 bg-emerald-500"></div>
              </div>

              <div className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  Registry Health
                </p>
                <p className="text-xl font-bold italic font-serif text-emerald-400">
                  {healthStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
