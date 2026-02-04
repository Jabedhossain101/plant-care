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

  // Scroll effect to change background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success('✅ Signed out successfully!'))
      .catch(error => toast.error('❌ Failed to sign out!'));
  };

  // Close menu on click outside
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
    { name: 'All Plants', path: '/allTrees' },
    { name: 'Add Plant', path: '/addPlant', protected: true },
    { name: 'My Plants', path: '/updateMango', protected: true },
    { name: 'All Users', path: '/users', protected: true },
    { name: 'Blog', path: '/unit' },
  ];

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-2 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4 group">
          <div className="relative">
            <img
              className="h-10 w-10 md:h-12 md:w-12 rounded-2xl object-cover border-2 border-emerald-100 shadow-lg group-hover:rotate-6 transition-transform duration-300"
              src="https://i.ibb.co/QFqvKGYS/att.jpg"
              alt="Logo"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <Link
            className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 group-hover:text-emerald-700 transition-colors"
            to="/"
          >
            THYME<span className="text-emerald-500 font-light">OUT</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(
            link =>
              (!link.protected || user) && (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative text-[13px] font-bold uppercase tracking-[0.15em] transition-colors ${
                      location.pathname === link.path
                        ? 'text-emerald-600'
                        : 'text-slate-500 hover:text-emerald-600'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-500 rounded-full animate-pulse"></span>
                    )}
                  </Link>
                </li>
              ),
          )}
        </ul>

        {/* Auth Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs border border-emerald-200">
                {user.displayName?.charAt(0) || 'U'}
              </div>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-xs font-black uppercase tracking-widest bg-slate-900 text-white rounded-full hover:bg-emerald-600 transition-all shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-6 py-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 text-xs font-black uppercase tracking-widest bg-emerald-600 text-white rounded-full hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all"
              >
                Join Now
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-slate-900 hover:bg-emerald-50 rounded-xl transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="absolute top-16 right-6 w-64 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-[2rem] shadow-2xl p-6 z-[101] animate-in slide-in-from-top-4 fade-in duration-300">
              <ul className="space-y-4 mb-6">
                {navLinks.map(
                  link =>
                    (!link.protected || user) && (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-sm font-bold uppercase tracking-widest ${
                            location.pathname === link.path
                              ? 'text-emerald-600'
                              : 'text-slate-600'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ),
                )}
              </ul>
              <div className="pt-4 border-t border-slate-100">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em]"
                  >
                    Sign Out
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="py-3 text-center border border-slate-200 rounded-2xl text-[10px] font-bold uppercase tracking-widest"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="py-3 text-center bg-emerald-600 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest"
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
