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
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newMango),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
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
          Add a New Plant
        </h1>
        <p className="text-center text-green-600 mb-8">
          Share your favorite plant with the world! Fill out the details below.
        </p>
        <form onSubmit={handleAddPlant}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Plant Image
              </label>
              <input
                type="text"
                name="Photo"
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Photo URL"
                required
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Plant Name
              </label>
              <input
                type="text"
                name="Plant"
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter plant name"
                required
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                required
              >
                <option disabled selected>
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
                className="textarea textarea-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Write a description..."
                rows={3}
                required
              ></textarea>
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Care Level
              </label>
              <select
                name="careLevel"
                className="select select-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                required
              >
                <option disabled selected>
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
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter watering frequency"
                required
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Last Watered Date
              </label>
              <input
                type="date"
                name="lastWateredDate"
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                required
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Next Watering Date
              </label>
              <input
                type="date"
                name="nextWateringDate"
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                required
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                Health Status
              </label>
              <input
                type="text"
                name="healthStatus"
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter health status"
                required
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter user email"
                required
              />
            </fieldset>
            <fieldset className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <label className="block text-green-700 font-semibold mb-1">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-300"
                placeholder="Enter user name"
                required
              />
            </fieldset>
          </div>
          <button className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-lg shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-200">
            Add Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMango;
