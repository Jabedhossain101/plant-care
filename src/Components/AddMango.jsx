import React from 'react';
import Swal from 'sweetalert2';

const AddMango = () => {
  const handleAddPlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newMango = Object.fromEntries(formData.entries());

    fetch('https://simple-mango-server.vercel.app/mangos', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newMango),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Record Established',
            text: 'Botanical specimen has been archived.',
            icon: 'success',
            confirmButtonColor: '#059669',
            customClass: { popup: 'rounded-[2rem] font-sans' },
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] py-20 px-6 relative overflow-hidden font-sans flex items-center justify-center">
      {/* 1. Kinetic Background Text */}
      <div className="absolute top-10 left-10 pointer-events-none z-0 opacity-[0.02] select-none">
        <h2 className="text-[18vw] font-black leading-none">REGISTRY</h2>
      </div>

      <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden relative z-10">
        <div className="grid grid-cols-12">
          {/* Left Side: Info & Decorative */}
          <div className="col-span-12 lg:col-span-4 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1000"
                className="w-full h-full object-cover"
                alt="bg"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center text-xl">
                  🌿
                </div>
                <span className="font-black tracking-tighter uppercase text-lg">
                  Specimen Log
                </span>
              </div>
              <h2 className="text-4xl font-black leading-tight mb-6">
                Expand the <br />{' '}
                <span className="text-emerald-500 italic font-serif font-light">
                  Green Archive.
                </span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Documenting a new species ensures the community has access to
                precise care protocols and botanical data.
              </p>
            </div>

            <div className="relative z-10 pt-10">
              <span className="text-[10px] font-bold tracking-[0.4em] text-emerald-600 uppercase">
                Est. MMXXVI
              </span>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="col-span-12 lg:col-span-8 p-8 md:p-16">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Plant Identification
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Please fill out all technical specifications.
                </p>
              </div>
              <span className="text-slate-100 font-black text-5xl hidden sm:block">
                #00
              </span>
            </div>

            <form
              onSubmit={handleAddPlant}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
            >
              {/* Fieldset logic replaced with modern group styling */}
              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2">
                  Plant Name
                </label>
                <input
                  type="text"
                  name="Plant"
                  placeholder="e.g. Monstera Deliciosa"
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2">
                  Image Source
                </label>
                <input
                  type="text"
                  name="Photo"
                  placeholder="HTTPS://IMAGE.URL"
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium cursor-pointer"
                  required
                >
                  <option value="" disabled selected>
                    Select Specimen Class
                  </option>
                  <option>Succulent</option>
                  <option>Fern</option>
                  <option>Flowering</option>
                  <option>Herb</option>
                  <option>Tree</option>
                </select>
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2">
                  Care Difficulty
                </label>
                <select
                  name="careLevel"
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium cursor-pointer"
                  required
                >
                  <option value="" disabled selected>
                    Maintenance Level
                  </option>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Difficult</option>
                </select>
              </div>

              <div className="group col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2">
                  Botanical Description
                </label>
                <textarea
                  name="description"
                  rows={2}
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium resize-none"
                  placeholder="Primary characteristics..."
                  required
                ></textarea>
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2">
                  Watering Routine
                </label>
                <input
                  type="text"
                  name="wateringFrequency"
                  placeholder="e.g. Every 7 days"
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="group col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors block mb-2">
                  Health Status
                </label>
                <input
                  type="text"
                  name="healthStatus"
                  placeholder="e.g. Thriving"
                  className="w-full bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all py-2 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="col-span-2 pt-6">
                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Finalize Registry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMango;
