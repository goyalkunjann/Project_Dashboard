import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Cards from './Cards';
import Table from './Table';

const Dashboard = () => {
  return (
    <div className="flex-1 bg-amber-100 p-5">
      <div className="flex justify-between">
        <h2 className="text-black font-bold text-xl">Overview</h2>
        <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
          Last 30 Days <FaChevronDown className="ml-1" />
        </div>
      </div>
      <div className="mt-5">
        <Cards />
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
