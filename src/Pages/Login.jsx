import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';

const Login = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata.lastSignInTime,
        };
        fetch('https://simple-mango-server.vercel.app/users', {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(signInInfo),
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* 1. Kinetic Background Text */}
      <div className="absolute top-0 left-0 pointer-events-none z-0 opacity-[0.03] select-none">
        <h2 className="text-[20vw] font-black leading-none">ACCESS</h2>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden relative z-10 border border-slate-100">
        {/* Left Side: Brand Visual */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-slate-900 relative">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop"
              alt="Botanical Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          </div>

          <div className="relative z-10">
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
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white leading-tight mb-4">
              Cultivating <br />{' '}
              <span className="text-emerald-500 italic font-serif font-light">
                Digital Sanctuaries.
              </span>
            </h2>
            <p className="text-slate-400 text-sm tracking-wide">
              EST. MMXXVI — BOTANICAL EXCELLENCE
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4 lg:justify-start justify-center">
              <span className="text-emerald-700 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                Member Portal
              </span>
              <div className="h-[1px] w-8 bg-emerald-200"></div>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">
              Welcome Back.
            </h1>
            <p className="text-slate-500 text-sm">
              Please enter your credentials to continue.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-4">
              <div className="group">
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

              <div className="group">
                <div className="flex justify-between mb-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-slate-900 transition-colors"
                  >
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-emerald-500 outline-none transition-all text-slate-800 font-medium"
                  required
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 active:scale-95"
              >
                Enter Workspace
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-slate-500 text-sm">
            New to the sphere?{' '}
            <Link
              to="/register"
              className="text-emerald-600 font-bold hover:text-slate-900 transition-colors"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* 2. Side Decorative Label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] hidden xl:flex items-center gap-4 opacity-20">
        <div className="w-[1px] h-12 bg-slate-900"></div>
        <span className="text-slate-900 text-[10px] font-bold tracking-[0.5em] uppercase">
          SECURE LOGIN
        </span>
      </div>
    </div>
  );
};

export default Login;
