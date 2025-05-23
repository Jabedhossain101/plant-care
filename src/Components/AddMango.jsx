import React from 'react';
import Swal from 'sweetalert2';

const AddMango = () => {
  const handleAddPlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const newMango = Object.fromEntries(formData.entries());
    console.log(newMango);

    fetch('http://localhost:4000/mangos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newMango),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          console.log('added successfully');
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    //send coffee data to the db server
  };

  return (
    <div>
      <div className="p-12 text-center">
        <h1 className="text-5xl">Add Mango</h1>
        <p className="text-fuchsia-400 m-4">
          Mango is called the king of fruits. It is sweet, juicy, and full of
          vitamins. People love to eat mangoes during the summer season.
        </p>

        <form onSubmit={handleAddPlant}>
          <div className="space-y-4 gap-3 grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Plant Image</label>
              <input
                type="text"
                name="Photo"
                className="input input-bordered w-full"
                placeholder="Photo URL"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Plant Name</label>
              <input
                type="text"
                name="Plant"
                className="input input-bordered w-full"
                placeholder="Enter plant name"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Category</label>
              <select name="category" className="select select-bordered w-full">
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

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Write a description..."
                rows={3}
              ></textarea>
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Care Level</label>
              <select
                name="careLevel"
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select care level
                </option>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Difficult</option>
              </select>
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">
                Watering Frequency (e.g., every 3 days)
              </label>
              <input
                type="text"
                name="wateringFrequency"
                className="input input-bordered w-full"
                placeholder="Enter watering frequency"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Last Watered Date</label>
              <input
                type="date"
                name="lastWateredDate"
                className="input input-bordered w-full"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Next Watering Date</label>
              <input
                type="date"
                name="nextWateringDate"
                className="input input-bordered w-full"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">Health Status</label>
              <input
                type="text"
                name="healthStatus"
                className="input input-bordered w-full"
                placeholder="Enter health status"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">User Email</label>
              <input
                type="email"
                name="userEmail"
                className="input input-bordered w-full"
                placeholder="Enter user email"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-full border p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                name="userName"
                className="input input-bordered w-full"
                placeholder="Enter user name"
              />
            </fieldset>
          </div>
          <button className="btn bg-blue-600 w-full mt-1.5">Add Plant</button>
        </form>
      </div>
    </div>
  );
};

export default AddMango;
