import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Grid, HStack, Image, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import filter from "../Assests/Filter/filter.svg";
import date from "../Assests/Filter/calendar.svg";
import send from "../Assests/Filter/send.svg";
import down from "../Assests/Filter/down.svg";

const Filter = () => {
    const [openPopover, setOpenPopover] = useState(null);
    const [isDateRange, setIsDateRange] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateSelect = (date) => {
        if (!startDate) {
            setStartDate(date);
        } else if (!endDate && date > startDate) {
            setEndDate(date);
        } else {
            setStartDate(date);
            setEndDate(null);
        }
    };

    const togglePopover = (popover) => {
        setOpenPopover(openPopover === popover ? null : popover);
    };

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const generateNovember2021Dates = () => {
        const dates = [];
        const start = new Date(2021, 10, 1); 
        const end = new Date(2021, 10, 30);  

        for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
            dates.push(new Date(day));
        }

        return dates;
    };

    const Calendar = ({ selectedDate, onDateSelect }) => {
        const dates = generateNovember2021Dates();

        const isSelected = (date) => {
            if (!startDate && !endDate) return false;
            if (startDate && date.toISOString() === startDate.toISOString()) return true;
            if (endDate && date.toISOString() === endDate.toISOString()) return true;
            return date > startDate && date < endDate;
        };

        const isStartDay = (date) => startDate && date.toISOString() === startDate.toISOString();
        const isEndDay = (date) => endDate && date.toISOString() === endDate.toISOString();

        return (
            <Box>
                <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                    {daysOfWeek.map((day) => (
                        <Box key={day} textAlign="center" fontWeight="bold">
                            {day}
                        </Box>
                    ))}
                    {dates.map((date) => (
                        <Box
                            key={date.toISOString()}
                            textAlign="center"
                            bg={isSelected(date) ? (isStartDay(date) || isEndDay(date) ? "#5570F1" : "gray.200") : "transparent"}
                            color={isSelected(date) ? "white" : "black"}
                            fontWeight={isSelected(date) ? "bold" : "normal"}
                            onClick={() => onDateSelect(date)}
                            cursor="pointer"
                            borderRadius={"100px"}
                        >
                            {date.getDate()}
                        </Box>
                    ))}
                </Grid>
            </Box>
        );
    };

    return (
        <>
        <Flex overflowX="auto">
            <HStack>

                {/* Search */}
                <div className="relative">
                    <input
                        className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Search..."
                    />
                    <div className="absolute left-0 inset-y-0 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
                {/* Filter */}
                <Popover isOpen={openPopover === 'filter'} onClose={() => setOpenPopover(null)}>
                    <PopoverTrigger>
                        <Button style={{ border: "1px solid black", backgroundColor: "white" }} onClick={() => togglePopover('filter')}>
                            <Image src={filter} alt="filter" />
                            <p className='ml-2 font-normal'>Filter</p>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverBody>
                            <h3 className="text-left text-xl font-medium">Filter</h3>
                            <p className='text-gray-400 text-left mt-3'>Order Type</p>
                            <HStack spacing='24px' className='mt-4 mb-3'>
                                <Checkbox className='text-gray-400'>Home Delivery</Checkbox>
                                <Checkbox className='text-gray-400'>Pick Up</Checkbox>
                            </HStack>
                            <hr />
                            <br />
                            <hr />
                            <div className='text-left mt-2'>
                                <FormControl>
                                    <FormLabel className='text-gray-400'>Status</FormLabel>
                                    <Select>
                                        <option>All</option>
                                        <option>Pending</option>
                                        <option>Completed</option>
                                    </Select>
                                    <FormLabel marginTop={"10px"} className='text-gray-400'>Customer</FormLabel>
                                    <Select>
                                        <option>All</option>
                                        <option>New</option>
                                        <option>Returning</option>
                                    </Select>
                                    <FormLabel marginTop={"20px"} className='text-gray-400'>Amount</FormLabel>
                                    <HStack>
                                        <Box>
                                            <FormLabel fontWeight={"semibold"}>From</FormLabel>
                                            <Input placeholder='0.00' />
                                        </Box>
                                        <Box>
                                            <FormLabel fontWeight={"semibold"}>To</FormLabel>
                                            <Input placeholder='0.00' />
                                        </Box>
                                    </HStack>
                                </FormControl>
                            </div>
                            <Button bgColor={"#5570F1"} color={"white"} borderRadius={"30px"} fontWeight={"normal"} w={"100%"} marginTop={"20px"}>Filter</Button>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                {/* Date Filter */}
                <Popover isOpen={openPopover === 'date'} onClose={() => setOpenPopover(null)}>
                    <PopoverTrigger>
                        <Button style={{ border: "1px solid black", backgroundColor: "white" }} onClick={() => togglePopover('date')}>
                            <Image src={date} alt="calendar" />
                            <p className='ml-2 font-normal'>Filter</p>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverBody textAlign={"left"}>
                            <h3 className="text-left text-xl font-medium">By Date</h3>
                            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="10px" marginTop={"10px"}>
                                <Checkbox className='text-gray-400 hover:text-gray-900'>This Week</Checkbox>
                                <Checkbox className='text-gray-400 hover:text-gray-900'>Last Week</Checkbox>
                                <Checkbox className='text-gray-400 hover:text-gray-900'>This Month</Checkbox>
                                <Checkbox className='text-gray-400 hover:text-gray-900'>Last Month</Checkbox>
                                <Checkbox className='text-gray-400 hover:text-gray-900'>This Year</Checkbox>
                                <Checkbox className='text-gray-400 hover:text-gray-900'>Last Year</Checkbox>
                            </Grid>
                            <hr />
                            <Checkbox className='text-gray-400 hover:text-gray-900 mt-2' onChange={() => setIsDateRange(!isDateRange)}>Date Range</Checkbox>
                            {isDateRange && (
                                <>
                                    <div className="flex justify-center">
                                        <nav
                                            className="flex overflow-x-auto items-center mt-4 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
                                            <button role="tab" type="button"
                                                className="flex w-32 whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none  text-[white] shadow bg-[#5570F1] dark:text-white dark:bg-yellow-600"
                                                aria-selected="">
                                                From
                                            </button>

                                            <button role="tab" type="button" style={{ textAlign: "center" }}
                                                className="flex w-32 whitespace-nowrap items-center  h-8 px-5 font-medium rounded-lg outline-none  hover:text-gray-800  dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400">
                                                To
                                            </button>
                                        </nav>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="relative inline-block text-left ">
                                            <div>
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:bg-white"
                                                    id="menu-button"
                                                    aria-expanded={openPopover === 'year'}
                                                    aria-haspopup="true"
                                                    onClick={() => togglePopover('year')}
                                                >
                                                    2021
                                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openPopover === 'year' && (
                                                <div
                                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby="menu-button"
                                                    tabIndex="-1"
                                                >
                                                    <div className="py-1" role="none">
                                                        <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">2020</a>
                                                        <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">2022</a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="relative inline-block text-left">
                                            <div>
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:bg-white"
                                                    id="menu-button"
                                                    aria-expanded={openPopover === 'month'}
                                                    aria-haspopup="true"
                                                    onClick={() => togglePopover('month')}
                                                >
                                                    November
                                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openPopover === 'month' && (
                                                <div
                                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby="menu-button"
                                                    tabIndex="-1"
                                                >
                                                    <div className="py-1" role="none">
                                                        <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">January</a>
                                                        <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">March</a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <Calendar
                                            selectedDate={startDate}
                                            onDateSelect={handleDateSelect}
                                        />
                                    </div>
                                </>
                            )}
                            <Button bgColor={"#5570F1"} color={"white"} borderRadius={"30px"} fontWeight={"normal"} w={"100%"} marginTop={"20px"}>Filter</Button>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                {/* Share Filter */}
                <Button style={{ border: "1px solid black", backgroundColor: "white" }}>
                    <Image src={send} alt="calendar" />
                    <p className='ml-2 font-normal'>Share</p>
                </Button>
                {/* Bulk Action */}
                <Button style={{ border: "1px solid black", backgroundColor: "white" }}>
                    <p className=' font-normal'>Bulk Action</p>
                    <Image src={down} alt="calendar" className='ml-1 md:ml-2' />
                </Button>
            </HStack>
            </Flex>
        </>
    );
};

export default Filter;
