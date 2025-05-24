import React from 'react';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { Link } from 'react-router';

const MyPlant = ({ singleData }) => {
  const { Plant, Photo, careLevel } = singleData;

  return (
    <div className="card bg-base-100 w-80 shadow-md m-4 mx-auto">
      <figure className="px-6 pt-6">
        <img
          src={Photo}
          alt={Plant}
          className="rounded-xl h-40 w-40 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center space-y-2">
        <h2 className="card-title text-lg font-bold">{Plant}</h2>
        <p className="text-sm text-gray-500">
          Care Level:{' '}
          <span className="font-semibold">{careLevel || 'Medium'}</span>
        </p>
        <div className="flex gap-3 justify-center mt-2">
          <Link to={'/addPlant'} className="btn btn-sm btn-success" title="Add">
            <Plus size={18} />
          </Link>
          <button className="btn btn-sm btn-warning" title="Update">
            <Pencil size={18} />
          </button>
          <button className="btn btn-sm btn-error" title="Remove">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlant;
