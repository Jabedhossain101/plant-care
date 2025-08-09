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
    const userProfile = {
      email,
      ...rest,
    };

    // Create user in Firebase
    createUser(email, password)
      .then(result => {
        // Save profile info in the db
        fetch('https://simple-mango-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userProfile),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                title: 'Sign up Successfully',
                icon: 'success',
                draggable: true,
              });
            }
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 relative overflow-hidden">
      {/* Decorative plant emoji */}
      <span className="absolute -top-10 -left-10 text-[8rem] opacity-10 select-none pointer-events-none">
        🌱
      </span>
      <span className="absolute -bottom-10 -right-10 text-[7rem] opacity-10 select-none pointer-events-none">
        🪴
      </span>
      <div className="w-full max-w-md mx-auto bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center animate-fade-in-up">
        <img
          src="https://i.ibb.co/QFqvKGYS/att.jpg"
          alt="Plant Logo"
          className="w-20 h-20 rounded-full shadow-lg border-4 border-green-200 mb-4 animate-bounce-slow"
        />
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-extrabold text-green-800">
            Sign Up
          </h1>
          <p className="text-sm text-green-600">
            Create your account to join the plant community!
          </p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-8 w-full">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-green-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border border-green-200 rounded-lg bg-white focus:ring-2 focus:ring-green-300 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-green-700">
                Address
              </label>
              <input
                type="text"
                name="Address"
                placeholder="Enter Your Address"
                className="w-full px-3 py-2 border border-green-200 rounded-lg bg-white focus:ring-2 focus:ring-green-300 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-green-700">
                Photo
              </label>
              <input
                type="text"
                name="Photo"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border border-green-200 rounded-lg bg-white focus:ring-2 focus:ring-green-300 transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-green-700"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border border-green-200 rounded-lg bg-white focus:ring-2 focus:ring-green-300 transition"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-green-700"
                >
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-green-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full px-3 py-2 border border-green-200 rounded-lg bg-white focus:ring-2 focus:ring-green-300 transition"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-bold rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-200 animate-bounce"
          >
            Sign up
          </button>
          <p className="px-6 text-sm text-center text-green-700">
            Already have an account?{' '}
            <Link
              to={'/login'}
              className="hover:underline text-green-500 font-semibold"
            >
              Login here
            </Link>
            .
          </p>
        </form>
      </div>
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s cubic-bezier(.39,.575,.565,1.000) both;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-12px);}
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Register;
