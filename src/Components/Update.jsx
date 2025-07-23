import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
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
  } = useLoaderData();

  const handleUpdatePlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    fetch(`https://simple-mango-server.vercel.app/mangos/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedPlant),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Plant Updated Successfully',
            icon: 'success',
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-3xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-6 md:p-12 relative overflow-hidden">
        {/* Decorative plant emoji */}
        <span className="absolute -top-8 -left-8 text-[7rem] opacity-10 select-none pointer-events-none">
          🌱
        </span>
        <span className="absolute -bottom-8 -right-8 text-[6rem] opacity-10 select-none pointer-events-none">
          🪴
        </span>
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-green-800 mb-2">
          Update Plant
        </h1>
        <p className="text-center text-green-600 mb-8">
          Update your plant details below.
        </p>
        <form onSubmit={handleUpdatePlant}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Plant Image
              </label>
              <input
                type="text"
                name="Photo"
                defaultValue={Photo}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Photo URL"
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Plant Name
              </label>
              <input
                type="text"
                name="Plant"
                defaultValue={Plant}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter plant name"
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Category
              </label>
              <select
                name="category"
                defaultValue={category}
                className="select select-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
              >
                <option disabled value="">
                  Select category
                </option>
                <option>Succulent</option>
                <option>Fern</option>
                <option>Flowering</option>
                <option>Herb</option>
                <option>Tree</option>
              </select>
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm md:col-span-2">
              <label className="block text-green-700 font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Write a description..."
                rows={3}
              ></textarea>
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Care Level
              </label>
              <select
                name="careLevel"
                defaultValue={careLevel}
                className="select select-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
              >
                <option disabled value="">
                  Select care level
                </option>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Difficult</option>
              </select>
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Watering Frequency (e.g., every 3 days)
              </label>
              <input
                type="text"
                name="wateringFrequency"
                defaultValue={wateringFrequency}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter watering frequency"
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Last Watered Date
              </label>
              <input
                type="date"
                name="lastWateredDate"
                defaultValue={lastWateredDate}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Next Watering Date
              </label>
              <input
                type="date"
                name="nextWateringDate"
                defaultValue={nextWateringDate}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Health Status
              </label>
              <input
                type="text"
                name="healthStatus"
                defaultValue={healthStatus}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter health status"
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={userEmail}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter user email"
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={userName}
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter user name"
              />
            </fieldset>
          </div>
          <button className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-lg shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-200">
            Update Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
