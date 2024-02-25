// components/Sidebar.jsx
import React from 'react';

import { FaTachometerAlt, FaPlus, FaChartLine, FaProjectDiagram, FaTasks, FaClock, FaTools, FaUsers, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="bg-black text-white w-64 h-screen p-5">
            <h1 className="text-center text-xl my-5"><FaTachometerAlt className="inline mr-2"/> Promage</h1>
            <div className="bg-white text-black rounded-full py-2 px-4 mb-2 cursor-pointer flex items-center justify-center mx-auto">
                <FaPlus className="mr-2 text-orange-500 bg-white rounded-full p-1" /> Create New Project
            </div>
            <div className="bg-white text-orange-500 rounded-full py-2 px-4 mb-2 cursor-pointer flex items-center justify-center mx-auto">
                <FaChartLine className="mr-2" /> Dashboard
            </div>
            <ul className="list-none p-0">
                <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center"><FaProjectDiagram className="mr-2" /> Projects</li>
                <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center"><FaTasks className="mr-2" /> Tasks</li>
                <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center"><FaChartLine className="mr-2" /> Dashboard</li>
                <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center"><FaClock className="mr-2" /> Time Log</li>
                <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center"><FaTools className="mr-2" /> Resource Management</li>
                <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center"><FaUsers className="mr-2" /> Users</li>
                <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center"><FaClipboardList className="mr-2" /> Project Template</li>
            </ul>
        </div>
    );
};

export default Sidebar;
