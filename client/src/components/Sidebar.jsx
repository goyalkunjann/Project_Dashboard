import React from 'react';

import { FaTachometerAlt, FaPlus, FaChartLine, FaProjectDiagram, FaTasks, FaClock, FaTools, FaUsers, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="bg-black text-white w-64 min-h-screen p-5 flex flex-col justify-between">
            <div>
                <h1 className="text-center text-xl my-5"><FaTachometerAlt className="inline mr-2"/> Promage</h1>
                <div className="bg-white text-black rounded-full py-2 px-4 mb-2 cursor-pointer flex items-center justify-center mx-auto hover:bg-gray-200 hover:text-black transition duration-300">
                    <FaPlus className="mr-2 text-orange-500 bg-white rounded-full p-1" /> Create New Project
                </div>
                <div className="bg-white text-orange-500 rounded-full py-2 px-4 mb-2 cursor-pointer flex items-center justify-center mx-auto hover:bg-gray-200 hover:text-black transition duration-300">
                    <FaChartLine className="mr-2" /> Dashboard
                </div>
                <ul className="list-none p-0">
                    <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center hover:bg-gray-200 hover:text-black transition duration-300"><FaProjectDiagram className="mr-2" /> Projects</li>
                    <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center hover:bg-gray-200 hover:text-black transition duration-300"><FaTasks className="mr-2" /> Tasks</li>
                    <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center hover:bg-gray-200 hover:text-black transition duration-300"><FaChartLine className="mr-2" /> Dashboard</li>
                    <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center hover:bg-gray-200 hover:text-black transition duration-300"><FaClock className="mr-2" /> Time Log</li>
                    <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center hover:bg-gray-200 hover:text-black transition duration-300"><FaTools className="mr-2" /> Resource Management</li>
                    <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center hover:bg-gray-200 hover:text-black transition duration-300"><FaUsers className="mr-2" /> Users</li>
                    <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center hover:bg-gray-200 hover:text-black transition duration-300"><FaClipboardList className="mr-2" /> Project Template</li>
                </ul>
            </div>
            <div className="flex justify-center">
                {/* Add any additional elements here for the bottom of the sidebar */}
            </div>
        </div>
    );
};

export default Sidebar;
