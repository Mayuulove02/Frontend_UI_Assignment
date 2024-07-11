import React from 'react';
import Filter from './Filter';
import CustomerDetails from './CustomerDetails';

const CustomerOrder = () => {
    return (
        <div className="p-4 md:p-6 bg-white min-h-screen mt-3 md:mt-0 rounded-xl md:flex md:flex-col">
            <div className='flex flex-col md:flex-row md:items-center justify-between'>
                <h3 className='text-xl mb-4 md:mb-0 md:mr-4'>Customers Orders</h3>
                <Filter />
            </div>
            <hr className='my-2'/>
            <CustomerDetails />
        </div>
    );
};

export default CustomerOrder;
