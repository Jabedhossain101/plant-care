import React from 'react';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPlant = ({ singleData }) => {
  const { _id, Plant, Photo, careLevel } = singleData;
  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://simple-mango-server.vercel.app/mangos/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Plant has been deleted.',
              icon: 'success',
            });
          });
      }
    });
  };

  return (
    <div className="max-w-xs w-full mx-auto m-6 bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-2xl hover:shadow-green-300 transition-shadow duration-300 overflow-hidden group relative">
      {/* Decorative floating leaf */}
      <span className="absolute -top-4 -left-4 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none pointer-events-none">
        🪴
      </span>
      {/* Card Image */}
      <figure className="flex justify-center bg-gradient-to-tr from-green-200 via-green-100 to-white pt-8 pb-4 px-6">
        <img
          src={Photo}
          alt={Plant}
          className="rounded-2xl h-40 w-40 object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
        />
      </figure>
      {/* Card Content */}
      <div className="px-6 pb-6 pt-2 flex flex-col items-center text-center">
        <h2 className="text-2xl font-extrabold text-green-800 mb-1 flex items-center gap-2">
          {Plant}
          <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full shadow">
            {careLevel || 'Medium'}
          </span>
        </h2>
        <div className="flex justify-center gap-3 mt-3 mb-4">
          <Link
            to={'/addPlant'}
            className="rounded-full bg-green-100 hover:bg-green-300 text-green-700 p-2 shadow transition-all"
            title="Add"
          >
            <Plus size={18} />
          </Link>
          <Link
            to={`/update/${_id}`}
            className="rounded-full bg-yellow-100 hover:bg-yellow-300 text-yellow-700 p-2 shadow transition-all"
            title="Update"
          >
            <Pencil size={18} />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="rounded-full bg-red-100 hover:bg-red-300 text-red-700 p-2 shadow transition-all"
            title="Remove"
          >
            <Trash2 size={18} />
          </button>
        </div>
        <div className="w-full h-2 bg-gradient-to-r from-green-200 via-green-400 to-green-200 rounded-full mt-2 mb-1 opacity-60" />
      </div>
    </div>
  );
};

export default MyPlant;
