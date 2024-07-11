import React from 'react'
import Filter from './Filter'

const CustomerOrder = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className='flex justify-between'>
                <h3 className='text-xl'>Customers Orders</h3>
                <Filter />
            </div>
        </div>
    )
}

export default CustomerOrder