import React from 'react';
import StatsCard from './StatsCard';
import cart from "../Assests/StatCard/cart.svg";
import orders from "../Assests/orders.svg";
import CustomerOrder from './CustomerOrder';

const OrderContent = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Create Button */}
            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                <h3 className='text-xl mb-4 md:mb-0 md:mr-4'>Orders Summary</h3>
                <button className="px-4 py-1 text-sm min-w-[120px] text-center text-white bg-[#5570F1] border rounded-full active:text-violet-500 hover:bg-[#5570F1] focus:outline-none focus:ring mb-4 md:mb-0">
                    + Create a New Order
                </button>
            </div>
            {/* StatsCard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <StatsCard
                    titles={["All Orders", "Pending", "Completed"]}
                    values={["450", "5", "445"]}
                    src={orders}
                    bgColor="#FEF5EA"
                    percentage={["", ""]}
                    cardColor="white"
                />
                <StatsCard
                    titles={["Canceled", "Returned", "Damaged"]}
                    values={["30", "20", "5"]}
                    src={orders}
                    bgColor="#FEF5EA"
                    percentage={["- 20%", ""]}
                    cardColor="white"
                    percentageColor={["red"]}
                />
                <StatsCard
                    titles={["Abandoned Cart", "Customers"]}
                    values={["20%", "30"]}
                    src={cart}
                    bgColor="#FEF5EA"
                    color={["#CC5F5F"]}
                    percentage={["+ 0.00%", ""]}
                    cardColor="white"
                />
            </div>
            {/* Customer Orders */}
            <CustomerOrder />
        </div>
    )
}

export default OrderContent;
