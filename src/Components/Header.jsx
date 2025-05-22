import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>
      <Link to="/allPlants">
        <li className="m-2">All plants</li>
      </Link>
      <Link to="/addPlant">
        <li className="m-2">Add plant</li>
      </Link>
      <Link to="/unit">
        <li className="m-2">My Plants</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Plant world</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-1">
        <Link to={'/login'}>
          <button className="btn">Login</button>
        </Link>
        <Link to={'register'}>
          <button className="btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
