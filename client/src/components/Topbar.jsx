import React from 'react';
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';

const Topbar = () => {
  return (
    <>
      <div className="topbar flex justify-between items-center px-5 py-2 bg-amber-100 text-black">
        <div className="dashboard">
          <h2 className="m-0 font-bold text-xl">Dashboard</h2>
        </div>
        <div className="right-section flex items-center">
          <div className="searchbar flex items-center bg-white rounded-full px-5 py-2 mr-5">
            <FaSearch className="text-black mr-2" />
            <input
              type="text"
              placeholder="Search for anything"
              className="border-none outline-none flex-1"
            />
          </div>
          <div className="notifications mr-5">
            <button className="bg-white rounded-full p-2 flex items-center cursor-pointer">
              <FaBell className="text-black" />
            </button>
          </div>
          <div className="profile flex items-center rounded-full bg-white p-2 flex-1">
            <img
              src="dp.jpeg" // Ensure the image path is correct
              alt="Profile Picture"
              className="rounded-full w-8 h-8 mr-2"
            />
            <div className="profile-info flex flex-col items-start">
              <div className="name text-black font-semibold">Kunjan Goyal</div>
              <div className="designation text-gray-500 text-sm">Developer</div>
            </div>
            <FaChevronDown className="text-black ml-2" />
          </div>
        </div>
      </div>
      <div className="border-b border-black"></div>
    </>
  );
};

export default Topbar;
