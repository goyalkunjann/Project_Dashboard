import React from 'react';
import { FaRegMoneyBillAlt, FaProjectDiagram, FaClock, FaTools } from 'react-icons/fa';

const Card = ({ icon, heading, mainContent, footer }) => (
  <div className="max-w-sm p-6 rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-amber-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
    <div className="flex justify-start items-center mb-4 text-gray-700">{icon}</div>
    <h3 className="mb-2 text-lg font-semibold text-gray-900">{heading}</h3>
    <div className="text-xl font-bold mb-2">{mainContent}</div>
    <div className="text-sm text-gray-500">{footer}</div>
  </div>
);

const Cards = () => (
  <div className="flex flex-wrap justify-around gap-4">
    <Card 
      icon={<FaRegMoneyBillAlt className="text-2xl"/>}
      heading="Total Revenue"
      mainContent={<><strong>$53,0089</strong></>}
      footer="12% decrease from last 12 months"
    />
    <Card 
      icon={<FaProjectDiagram className="text-2xl"/>}
      heading="Projects"
      mainContent={<><strong>95</strong>/100</>}
      footer="12% decrease from last month"
    />
    <Card 
      icon={<FaClock className="text-2xl"/>}
      heading="Time Spent"
      mainContent={<><strong>1022</strong>/1300 Hrs</>}
      footer="8% increase from last month"
    />
    <Card 
      icon={<FaTools className="text-2xl"/>}
      heading="Resources"
      mainContent={<><strong>101</strong>/120</>}
      footer="2% increase from last month"
    />
  </div>
);

export default Cards;
