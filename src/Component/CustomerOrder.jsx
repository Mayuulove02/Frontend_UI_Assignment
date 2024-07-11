import React from 'react'
import Filter from './Filter'
import CustomerDetails from './CustomerDetails'

const CustomerOrder = () => {
    return (
        <div className="p-6 bg-white min-h-screen mt-3 rounded-xl">
            <div className='flex justify-between'>
                <h3 className='text-xl'>Customers Orders</h3>
                <Filter />
            </div>
            <hr className='mt-2'/>
            <CustomerDetails />
        </div>
    )
}

export default CustomerOrder