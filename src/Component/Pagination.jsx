import { HStack, Img } from '@chakra-ui/react';
import React, { useState } from 'react';
import left from "../Assests/orders/left.svg";
import right from "../Assests/orders/right.svg";

const Pagination = ({ totalItems, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handlePageChange = (e) => {
        setCurrentPage(parseInt(e.target.value));
    };

    return (
        <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
                <select
                    id="itemsPerPage"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="border border-gray-300 rounded-lg p-1 bg-gray-100"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
                <p className=" ml-4 text-gray-400">Items per page:</p>
                <p className="text-md text-gray-600 ml-2">1-10 of 200 items</p>
            </div>
            <div className="flex items-center">
                <select
                    id="currentPage"
                    value={currentPage}
                    onChange={handlePageChange}
                    className="border border-gray-300 rounded-lg p-1 bg-gray-100"
                >
                    <option >
                        1
                    </option>
                    <option >
                        2
                    </option>
                    <option >
                        3
                    </option>
                </select>
                <span className="ml-2 text-gray-600">of 44 pages</span>
                <HStack className="ml-2" spacing={"10px"}>
                    <Img src={left} alt='left' />
                    <Img src={right} alt='left' />
                </HStack>
            </div>
        </div>
    );
};

export default Pagination;
