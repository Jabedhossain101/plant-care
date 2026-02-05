import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../Pages/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  // Scroll effect for advanced transparency
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success('✅ Session ended successfully'))
      .catch(() => toast.error('❌ Logout failed'));
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Archive', path: '/allTrees' },
    { name: 'Add Record', path: '/addPlant', protected: true },
    { name: 'Collection', path: '/updateMango', protected: true },
    { name: 'Guardians', path: '/users', protected: true },
    { name: 'Journal', path: '/unit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500 rounded-full border ${
          scrolled
            ? 'bg-white/70 backdrop-blur-2xl border-white/20 shadow-2xl shadow-slate-200/50 py-3 mx-4 lg:mx-auto'
            : 'bg-transparent border-transparent py-2'
        }`}
      >
        {/* Logo & Brand Identity */}
        <div className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
            <img
              className="relative h-10 w-10 md:h-11 md:w-11 rounded-xl object-cover border border-white/40 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]"
              src="https://i.ibb.co/QFqvKGYS/att.jpg"
              alt="Logo"
            />
          </div>
          <Link
            className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 flex flex-col leading-none"
            to="/"
          >
            THYME
            <span className="text-emerald-500 italic font-serif font-light text-[15px] tracking-normal">
              OUT
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Minimalist Editorial Style */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(
            link =>
              (!link.protected || user) && (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-emerald-600'
                        : 'text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
              ),
          )}
        </ul>

        {/* Auth Actions with Visual Hierarchy */}
        <div className="hidden lg:flex items-center gap-6 border-l border-slate-100 pl-8">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="group relative">
                <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-[10px] border-2 border-white shadow-md cursor-pointer hover:bg-emerald-600 transition-colors">
                  {user.displayName?.charAt(0) || 'U'}
                </div>
                {/* Subtle Hover Name Overlay */}
                <span className="absolute top-12 right-0 bg-white px-3 py-1 rounded-md text-[9px] font-bold text-slate-900 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-50 uppercase tracking-widest">
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-rose-500 transition-colors"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link
                to="/login"
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200"
              >
                Join Now
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle & Menu */}
        <div className="lg:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 text-slate-900 bg-slate-50 rounded-2xl transition-colors"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute top-20 right-0 w-[85vw] bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] p-10 z-[101] animate-in slide-in-from-top-4 duration-500">
              <ul className="space-y-6 mb-10 text-right">
                {navLinks.map(
                  link =>
                    (!link.protected || user) && (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-2xl font-black tracking-tighter ${
                            location.pathname === link.path
                              ? 'text-emerald-600'
                              : 'text-slate-800'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ),
                )}
              </ul>
              <div className="pt-8 border-t border-slate-50 flex flex-col gap-4">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest"
                  >
                    End Session
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="py-4 text-center border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest"
                    >
                      In
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="py-4 text-center bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-100"
                    >
                      Join
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
