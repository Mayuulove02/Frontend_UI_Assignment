import React, { useState } from 'react';
import { Img } from '@chakra-ui/react';

const StatsCard = ({
  titles = [],
  values = [],
  src,
  bgColor,
  percenatge = [],
  color = [],
  cardColor,
  valueColor = [],
  showDropdown = true // Prop to control dropdown visibility
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4 rounded-xl shadow" style={{ backgroundColor: `${cardColor}` }}>
      <div className="flex justify-between">
        <div className='flex items-center justify-center h-10 w-10 rounded-xl' style={{ backgroundColor: `${bgColor}` }}>
          <Img src={src} alt="icons" className="h-6 w-6" />
        </div>
        {showDropdown && ( // Conditionally render dropdown based on showDropdown prop
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:bg-white"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                This Week
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {isOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
                onBlur={closeDropdown}
              >
                <div className="py-1" role="none">
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Last Week</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Last Month</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-6 grid gap-4" style={{ gridTemplateColumns: `repeat(${titles.length}, minmax(0, 1fr))` }}>
        {titles.map((title, index) => (
          <div key={index} className="flex flex-col items-start">
            <h3 className="text-gray-400 text-sm" style={{ color: `${color[index]}` }}>{title}</h3>
            <div className="flex items-center">
              <p className="text-xl font-medium" style={{ color: `${valueColor[index]}` }}>{values[index]}</p>
              <p className="ml-3 text-xs font-normal text-green-500">{percenatge[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
