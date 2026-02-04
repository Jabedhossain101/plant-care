import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white pt-24 pb-12 overflow-hidden font-sans">
      {/* Background Kinetic Text (Subtle) */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 opacity-[0.03] select-none">
        <h2 className="text-[15vw] font-black leading-none">SPHERE</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-12 gap-12 lg:gap-20">
          {/* Brand Identity & Mission */}
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img
                  className="relative h-14 w-14 rounded-2xl object-cover border border-white/10"
                  src="https://i.ibb.co/QFqvKGYS/att.jpg"
                  alt="logo"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Green
                <span className="text-emerald-500 italic font-serif font-light">
                  Sphere
                </span>
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
              We redefine modern spaces with the timeless beauty of nature.
              Growing a greener tomorrow, one masterpiece at a time.
            </p>

            {/* Social Icons with Minimalist Style */}
            <div className="flex gap-6">
              {['Twitter', 'YouTube', 'Facebook'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-500 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 text-xs font-black uppercase tracking-widest"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links with Editorial Style */}
          <div className="col-span-6 lg:col-span-2">
            <h3 className="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Plants', path: '/allData' },
                { name: 'Add Plant', path: '/addPlant' },
                { name: 'My Plants', path: '/updateMango' },
                { name: 'Journal', path: '/unit' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-tight"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="col-span-6 lg:col-span-2">
            <h3 className="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Refinement
            </h3>
            <ul className="space-y-4 text-slate-400 text-sm font-medium tracking-tight">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section with Advanced UI */}
          <div className="col-span-12 lg:col-span-4">
            <h3 className="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Join our botanical circle for exclusive care tips and collection
              drops.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800/50 border-b border-slate-700 py-4 px-0 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-all"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-emerald-500 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent my-16"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                ahmed@gmail.com
              </span>
            </div>
            <span className="hidden md:block text-slate-700">|</span>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              +880 123 456 789
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              © {new Date().getFullYear()} — Designed by{' '}
              <br className="md:hidden" />
              <span className="text-slate-200">MD JABED HOSSAIN RAFSAN</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
