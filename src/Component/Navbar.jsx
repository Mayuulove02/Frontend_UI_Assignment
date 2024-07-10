import React, { useState } from 'react';
import { Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 
import avatar from "../Assests/Navbar/profile.png";
import bellIcon from "../Assests/Navbar/notification.svg";
import homeIcon from "../Assests/Navbar/Home.svg"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="bg-white py-4 px-6 flex justify-between items-center">
                <div className="text-xl font-normal">
                    Dashboard
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#FEF5EA] px-3 py-2 text-sm text-gray-900 shadow-sm hover:bg-[#FEF5EA]"
                                id="menu-button"
                                aria-expanded={isOpen}
                                aria-haspopup="true"
                                onClick={toggleDropdown}
                            >
                                Nanny’s Shop
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
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Profile</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="relative focus:outline-none">
                        <Img src={bellIcon} alt="Notifications" className="w-6 h-6" />
                    </button>
                    <Img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                </div>
            </nav>
            <hr />
            <nav className="bg-white py-2 px-6">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li>
                        <Link to="/" className="flex items-center space-x-1 hover:text-gray-700">
                            <Img src={homeIcon} alt="Home" className="w-4 h-4" />
                        </Link>
                    </li>
                    <li>
                        {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 01.707 1.707L5.414 10l5.293 5.293a1 1 0 11-1.414 1.414L3.293 10.707a1 1 0 010-1.414l6-6A1 1 0 0110 3z" clipRule="evenodd" />
                        </svg> */}
                    </li>
                </ol>
            </nav>
        </>
    );
};

export default Navbar;
