import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Pages/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('✅ Signed out successfully!');
      })
      .catch(error => {
        console.error('Error logging out:', error);
        toast.error('❌ Failed to sign out!');
      });
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const links = (
    <>
      <Link to="/">
        <li className="mx-2 my-1 list-none text-green-800 hover:text-green-600 font-semibold transition-colors">
          Home
        </li>
      </Link>
      <Link to="/allTrees">
        <li className="mx-2 my-1 list-none text-green-800 hover:text-green-600 font-semibold transition-colors">
          All Plants
        </li>
      </Link>
      {user && (
        <>
          <Link to="/addPlant">
            <li className="mx-2 my-1 list-none text-green-800 hover:text-green-600 font-semibold transition-colors">
              Add Plant
            </li>
          </Link>
          <Link to="/updateMango">
            <li className="mx-2 my-1 list-none text-green-800 hover:text-green-600 font-semibold transition-colors">
              My Plants
            </li>
          </Link>
          <Link to="/users">
            <li className="mx-2 my-1 list-none text-green-800 hover:text-green-600 font-semibold transition-colors">
              All Users
            </li>
          </Link>
        </>
      )}
      <Link to="/unit">
        <li className="mx-2 my-1 list-none text-green-800 hover:text-green-600 font-semibold transition-colors">
          Blog
        </li>
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-50 via-white to-green-100 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 relative">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-3xl border-2 border-green-300 shadow"
            src="https://i.ibb.co/QFqvKGYS/att.jpg"
            alt="Logo"
          />
          <Link
            className="text-2xl font-extrabold tracking-wide text-green-800"
            to="/"
          >
            THYME<span className="text-green-500">OUT</span>
          </Link>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-2">{links}</ul>
        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold shadow hover:from-pink-500 hover:to-pink-700 transition-all"
            >
              Sign out
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="px-5 py-2 border border-blue-500 text-blue-500 rounded-xl font-semibold hover:bg-blue-50 transition">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-bold shadow hover:from-green-500 hover:to-green-700 transition-all">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Mobile Dropdown */}
          {menuOpen && (
            <ul className="menu menu-sm dropdown-content bg-white rounded-xl shadow-lg mt-2 w-48 absolute right-0 top-14 z-50 border border-green-100 animate-fade-in">
              {links}
              <li className="my-2">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold shadow hover:from-pink-500 hover:to-pink-700 transition-all"
                  >
                    Sign out
                  </button>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link to="/login">
                      <button
                        className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-xl font-semibold hover:bg-blue-50 transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button
                        className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-bold shadow hover:from-green-500 hover:to-green-700 transition-all"
                        onClick={() => setMenuOpen(false)}
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
