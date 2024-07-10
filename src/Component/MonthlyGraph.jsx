import React, { useState } from 'react';
import { Tooltip } from '@chakra-ui/react';

const MonthlyGraph = ({ heights }) => {
    const [isOpenSales, setIsOpenSales] = useState(false);
    const [isOpenLast7Days, setIsOpenLast7Days] = useState(false);

    const toggleDropdownSales = () => {
        setIsOpenSales(!isOpenSales);
    };

    const toggleDropdownLast7Days = () => {
        setIsOpenLast7Days(!isOpenLast7Days);
    };

    const closeDropdowns = () => {
        setIsOpenSales(false);
        setIsOpenLast7Days(false);
    };

    const days = ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'];
    const maxBarHeight = 280;

    return (
        <div className='bg-white rounded-xl shadow-md px-6 py-4'>
            <div className="flex justify-between p-0">
                <div className='flex items-center justify-center  rounded-xl' >
                    <h3 className='font-medium text-lg' >Summary</h3>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="ml-2 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#5570F114] px-3 py-2 text-sm text-[#5570F1] hover:bg-[#5570F114]"
                                id="menu-button-sales"
                                aria-expanded={isOpenSales}
                                aria-haspopup="true"
                                onClick={toggleDropdownSales}
                            >
                                Sales
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isOpenSales && (
                            <div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[white] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button-sales"
                                tabIndex="-1"
                                onBlur={closeDropdowns}
                            >
                                <div className="py-1" role="none">
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-sales-0">Account</a>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-sales-1">Summary</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:bg-white"
                            id="menu-button-last7days"
                            aria-expanded={isOpenLast7Days}
                            aria-haspopup="true"
                            onClick={toggleDropdownLast7Days}
                        >
                            Last 7 Days
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {isOpenLast7Days && (
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button-last7days"
                            tabIndex="-1"
                            onBlur={closeDropdowns}
                        >
                            <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-last7days-0">Last Month</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-last7days-1">Last Year</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex-grow  flex">
                <div className="flex flex-col justify-between h-80 mr-4">
                    {["100k", "80k", '60k', "40k", "20k", ""].map((value, index) => (
                        <div key={index} className="flex items-center">
                            <span className="text-xs text-gray-400 mr-2">{value}</span>
                        </div>
                    ))}
                </div>
                <div className="flex-grow flex flex-col items-end h-80">
                    <div className="grid grid-cols-7 gap-1 flex-grow self-stretch mt-4">
                        {days.map((day, index) => (
                            <Tooltip key={index} label={`Sales: ${heights[index]}%`} placement="top">
                                <div className="flex flex-col justify-end items-center">
                                    <div className="relative w-4 mx-auto bg-gray-300 rounded-full" style={{ width: '12%', height: `${maxBarHeight}px` }}>
                                        <div
                                            className="absolute bottom-0 rounded-full bg-[#5570F1]"
                                            style={{
                                                height: `${(heights[index] / 100) * maxBarHeight}px`,
                                                width: '100%',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="text-center text-xs text-gray-400 font-medium mt-2">{day}</div>
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyGraph;
