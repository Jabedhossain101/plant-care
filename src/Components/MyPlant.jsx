import React from 'react';
import { Plus, Trash2, Pencil, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPlant = ({ singleData }) => {
  const { _id, Plant, Photo, careLevel } = singleData;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Remove Specimen?',
      text: 'This botanical record will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0f172a', // Slate 900
      cancelButtonColor: '#f1f5f9', // Slate 100
      confirmButtonText: 'Yes, Remove',
      customClass: {
        popup: 'rounded-[2rem] font-sans border-none shadow-2xl',
        confirmButton:
          'rounded-full px-6 py-3 uppercase text-xs tracking-widest font-black',
        cancelButton:
          'rounded-full px-6 py-3 uppercase text-xs tracking-widest font-black text-slate-600',
      },
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://simple-mango-server.vercel.app/mangos/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            Swal.fire({
              title: 'Removed',
              icon: 'success',
              confirmButtonColor: '#10b981',
            });
          });
      }
    });
  };

  return (
    <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
      {/* 1. Top Image Section with Glass Overlay */}
      <div className="relative h-64 overflow-hidden bg-slate-50">
        <img
          src={Photo}
          alt={Plant}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        />

        {/* Care Level Badge (Glassmorphism) */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 backdrop-blur-xl bg-white/70 border border-white/40 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-900 shadow-sm">
            {careLevel || 'Standard'} Care
          </span>
        </div>

        {/* Floating Quick Actions Dashboard */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <Link
            to={`/update/${_id}`}
            className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110 translate-y-4 group-hover:translate-y-0 duration-500"
            title="Update Record"
          >
            <Pencil size={18} />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 translate-y-4 group-hover:translate-y-0 duration-500 delay-75"
            title="Delete Specimen"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-8 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-[0.3em] mb-1 block">
              Personal Collection
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter leading-tight">
              {Plant}
            </h2>
          </div>
          <Link
            to={`/plantDetails/${_id}`}
            className="p-2 text-slate-300 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink size={20} />
          </Link>
        </div>

        {/* 3. Decorative Elements */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-50">
          <Link
            to={'/addPlant'}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors group/link"
          >
            <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-emerald-50 transition-colors">
              <Plus size={12} />
            </div>
            Add New Record
          </Link>
        </div>
      </div>

      {/* Background Kinetic Serial (ID) */}
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none group-hover:opacity-[0.08] transition-opacity">
        <h3 className="text-8xl font-black rotate-90">ID-{_id.slice(-2)}</h3>
      </div>
    </div>
  );
};

export default MyPlant;
