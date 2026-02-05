import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());
    const userProfile = { email, ...rest };

    createUser(email, password)
      .then(result => {
        fetch('https://simple-mango-server.vercel.app/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(userProfile),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                title: 'Welcome to the Sphere!',
                text: 'Your botanical journey starts here.',
                icon: 'success',
                confirmButtonColor: '#059669',
                customClass: { popup: 'rounded-[2rem] font-sans' },
              });
            }
          });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* 1. Kinetic Background Text */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 opacity-[0.03] select-none text-right">
        <h2 className="text-[18vw] font-black leading-none">JOIN</h2>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[3rem] shadow-2xl overflow-hidden relative z-10 border border-slate-100">
        {/* Left Side: Registration Form (7 Cols) */}
        <div className="col-span-1 lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-white order-2 lg:order-1">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-emerald-700 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                New Membership
              </span>
              <div className="h-[1px] w-8 bg-emerald-200"></div>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">
              Create Account.
            </h1>
            <p className="text-slate-500 text-sm">
              Join our global community of plant enthusiasts.
            </p>
          </div>

          <form
            onSubmit={handleSignUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
          >
            {/* Name Input */}
            <div className="group col-span-1">
              <label className="block mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all text-slate-800 font-medium"
                required
              />
            </div>

            {/* Email Input */}
            <div className="group col-span-1">
              <label className="block mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@domain.com"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all text-slate-800 font-medium"
                required
              />
            </div>

            {/* Address Input */}
            <div className="group col-span-1">
              <label className="block mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                Location
              </label>
              <input
                type="text"
                name="Address"
                placeholder="City, Country"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all text-slate-800 font-medium"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="group col-span-1">
              <label className="block mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                Avatar URL
              </label>
              <input
                type="text"
                name="Photo"
                placeholder="https://image.path"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all text-slate-800 font-medium"
                required
              />
            </div>

            {/* Password Input */}
            <div className="group col-span-2">
              <label className="block mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                Security Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all text-slate-800 font-medium"
                required
              />
            </div>

            <div className="col-span-2 pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 active:scale-95"
              >
                Establish Membership
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-slate-500 text-sm">
            Already a member?{' '}
            <Link
              to="/login"
              className="text-emerald-600 font-bold hover:text-slate-900 transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Side: Visual Section (5 Cols) */}
        <div className="col-span-1 lg:col-span-5 bg-slate-900 relative order-1 lg:order-2">
          <div className="absolute inset-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop"
              alt="Nature Aesthetic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-transparent to-slate-900/80"></div>
          </div>

          <div className="relative z-10 p-12 h-full flex flex-col justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/QFqvKGYS/att.jpg"
                className="h-10 w-10 rounded-xl"
                alt="logo"
              />
              <span className="text-white font-black tracking-tighter uppercase text-xl">
                Green
                <span className="text-emerald-500 italic font-serif">
                  Sphere
                </span>
              </span>
            </Link>

            <div className="mb-10">
              <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
                Exclusive Community
              </span>
              <h2 className="text-3xl font-black text-white leading-tight">
                Unlock <br />{' '}
                <span className="text-emerald-400 italic font-serif font-light">
                  Botanical Privileges.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
