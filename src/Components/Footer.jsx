import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white pt-16 pb-8 mt-16">
      {/* Wavy SVG Top Border */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#f0fdf4"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand & Social */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                className="h-12 w-12 rounded-2xl shadow-lg border-2 border-green-300 bg-white"
                src="https://i.ibb.co/QFqvKGYS/att.jpg"
                alt="logo"
              />
              <span className="text-2xl font-extrabold tracking-wide">
                <span className="text-green-200">GREEN</span>
                <span className="text-green-400">SPHERE</span>
              </span>
            </div>
            <p className="text-green-100 text-sm mb-4 text-center md:text-left">
              Growing a greener tomorrow, one plant at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="text-green-300 hover:text-green-100"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="text-green-300 hover:text-green-100"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="text-green-300 hover:text-green-100"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-green-200 font-bold text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allData"
                  className="hover:text-green-400 transition-colors"
                >
                  All Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/addPlant"
                  className="hover:text-green-400 transition-colors"
                >
                  Add Plant
                </Link>
              </li>
              <li>
                <Link
                  to="/updateMango"
                  className="hover:text-green-400 transition-colors"
                >
                  My Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/unit"
                  className="hover:text-green-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-green-200 font-bold text-lg mb-3">
              Newsletter
            </h3>
            <p className="text-green-100 text-sm mb-3 text-center">
              Get plant care tips & updates in your inbox!
            </p>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-l-xl px-3 py-2 w-full text-green-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-300 text-green-900 font-bold px-4 py-2 rounded-r-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-green-600 my-8"></div>
        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-green-200 text-xs">
          <div>
            <span className="font-bold">Email:</span> ahmed@gmail.com
            <span className="mx-2">|</span>
            <span className="font-bold">Contact:</span> 0123456789
          </div>
          <div>
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-green-300">
              MD JABED HOSSAIN RAFSAN
            </span>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
