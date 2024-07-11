import React, { useState } from 'react';
import CopyIcon from '../Assests/orders/copy.svg'; // Adjust the import based on your file structure
import { Image, Img } from '@chakra-ui/react';
import sort from "../Assests/orders/sort.svg"
import Pagination from './Pagination';

const getStatusClasses = (status) => {
    switch (status) {
        case 'Completed':
            return 'bg-[#32936F29] text-[#519C66]';
        case 'Pending':
            return 'bg-[#FFF2E2] text-[#1C1D22]';
        case 'In Progress':
            return 'bg-[#5570F129] text-[#5570F1]';
        default:
            return '';
    }
};

const CustomerDetails = () => {
    const [orders, setOrders] = useState([
        { id: 1, customer: 'Mark Otto', date: '12 Aug 2022 - 12.25 am', type: 'Home Delivery', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Completed' },
        { id: 2, customer: 'Jacob Thornton', date: '12 Aug 2022 - 12.25 am', type: 'Home Delivery', trackingId: '9348fjr73', total: '₦25,000.00', status: 'In Progress' },
        { id: 3, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
        { id: 4, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
        { id: 5, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
        { id: 6, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
        { id: 7, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
        { id: 8, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
        { id: 9, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
        { id: 10, customer: 'Larry Wild', date: '12 Aug 2022 - 12.25 am', type: 'Pick Up', trackingId: '9348fjr73', total: '₦25,000.00', status: 'Pending' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);



    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handlePageChange = (e) => {
        setCurrentPage(parseInt(e.target.value));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedOrders = orders.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(orders.length / itemsPerPage);


    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"><input type="checkbox" /></th>

                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left  ">
                                        <div className='flex'>
                                            <p className=' font-semibold'>Customer Name</p>
                                            <Image src={sort} alt="filter" className='ml-2' />
                                        </div>
                                    </th>
                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left  ">
                                        <div className='flex'>
                                            <p className=' font-semibold'>Order Date</p>
                                            <Image src={sort} alt="filter" className='ml-2' />
                                        </div>
                                    </th>
                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left  ">
                                        <div className='flex'>
                                            <p className=' font-semibold'>Order Type</p>
                                            <Image src={sort} alt="filter" className='ml-2' />
                                        </div>
                                    </th>
                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left  ">
                                        <div className='flex'>
                                            <p className=' font-semibold'>Tracking ID</p>
                                            <Image src={sort} alt="filter" className='ml-2' />
                                        </div>
                                    </th>
                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left  ">
                                        <div className='flex'>
                                            <p className=' font-semibold'>Order Total</p>
                                            <Image src={sort} alt="filter" className='ml-2' />
                                        </div>
                                    </th>

                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left  ">
                                        <div className='flex'>
                                            <p className=' font-semibold'>Action</p>
                                            <Image src={sort} alt="filter" className='ml-2' />
                                        </div>
                                    </th>
                                    <th scope="col" className="text-sm font-semibold text-gray-900 px-6 py-4 text-left  ">
                                        <div className='flex'>
                                            <p className=' font-semibold'>Status</p>
                                            <Image src={sort} alt="filter" className='ml-2' />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="border-b bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.customer}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.date}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.type}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {order.trackingId}
                                            <button className="ml-2">
                                                <Img src={CopyIcon} className="h-4 w-4 inline" />
                                            </button>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.total}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <select
                                                value={order.status}
                                                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                className="border border-gray-300 rounded-xl p-1 bg-gray-100"
                                            >
                                                <option value="Completed">Completed</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Pending">Pending</option>
                                            </select>
                                        </td>
                                        <td >
                                            <p className={`text-sm rounded-xl text-center h-8 font-light px-4 py-2 whitespace-nowrap ${getStatusClasses(order.status)}`}>{order.status}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;
