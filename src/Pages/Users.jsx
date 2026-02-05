import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { Trash2, UserPlus, MapPin, Mail } from 'lucide-react';

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = id => {
    Swal.fire({
      title: 'Remove Access?',
      text: 'This user profile will be permanently de-listed.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0f172a',
      cancelButtonColor: '#f1f5f9',
      confirmButtonText: 'Yes, Terminate',
      customClass: {
        popup: 'rounded-[2rem] font-sans border-none shadow-2xl',
        confirmButton:
          'rounded-full px-6 py-3 uppercase text-xs tracking-widest font-black',
        cancelButton:
          'rounded-full px-6 py-3 uppercase text-xs tracking-widest font-black text-slate-600',
      },
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://simple-mango-server.vercel.app/users/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(() => {
            const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers);
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
    <div className="min-h-screen bg-[#fcfcf9] py-24 px-6 relative overflow-hidden font-sans">
      {/* 1. Kinetic Background Text */}
      <div className="absolute top-20 right-0 pointer-events-none z-0 opacity-[0.02] select-none">
        <h2 className="text-[18vw] font-black leading-none uppercase">
          Directory
        </h2>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 2. Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-700 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                Admin Console
              </span>
              <div className="h-[1px] w-12 bg-emerald-200"></div>
            </div>
            <h2 className="text-slate-900 text-5xl md:text-6xl font-black tracking-tighter leading-none">
              Community <br />
              <span className="text-emerald-600 italic font-serif font-light">
                Guardians.
              </span>
            </h2>
          </div>

          <Link
            to={'/register'}
            className="group flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200"
          >
            <UserPlus size={16} />
            Provision New User
          </Link>
        </div>

        {/* 3. Premium Table Interface */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-slate-50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Index
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Botanist Profile
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Access Node
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-right">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-8 py-6">
                      <span className="text-slate-300 font-mono font-bold text-sm group-hover:text-emerald-500 transition-colors">
                        #{(index + 1).toString().padStart(2, '0')}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-emerald-100 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <img
                            className="relative h-14 w-14 rounded-2xl object-cover border-2 border-white shadow-sm"
                            src={user.Photo}
                            alt={user.name}
                          />
                        </div>
                        <div>
                          <div className="font-black text-slate-900 tracking-tight">
                            {user.name}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                            <MapPin size={10} className="text-emerald-500" />{' '}
                            {user.Address}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-slate-600 font-medium text-sm italic">
                        <Mail size={14} className="text-slate-300" />{' '}
                        {user.email}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="p-3 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-300"
                        title="Revoke Access"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Footer Summary */}
        <div className="mt-10 flex justify-between items-center px-8">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Total Records Found:{' '}
            <span className="text-slate-900">{users.length}</span>
          </p>
          <div className="h-[1px] flex-1 mx-10 bg-slate-100 hidden md:block"></div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest hidden md:block">
            Database: v2.0.26
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
