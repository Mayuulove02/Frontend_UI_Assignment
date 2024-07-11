import React from 'react'
import StatsCard from './StatsCard';
import cart from "../Assests/StatCard/cart.svg";
import orders from "../Assests/orders.svg";
import CustomerOrder from './CustomerOrder';

const OrderContent = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Create Button */}
            <div className='flex justify-between'>
                <h3 className='text-xl'>Orders Summary</h3>
                <button class="px-4 py-1 text-sm min-w-[120px] text-center text-white bg-[#5570F1] border  rounded-full active:text-violet-500 hover:bg-[#5570F1] focus:outline-none focus:ring">
                    + Create a New Order
                </button>
            </div>
            {/* StatsCard */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                <StatsCard
                    titles={["All Orders", "Pending", "Completed"]}
                    values={["450", "5", "445"]}
                    src={orders}
                    bgColor="#FEF5EA"
                    percenatge={["", ""]}
                    cardColor={"white"}
                />
                <StatsCard
                    titles={["Canceled", "Returned", "Damaged"]}
                    values={["30", "20", "5"]}
                    src={orders}
                    bgColor="#FEF5EA"
                    percenatge={["- 20%", ""]}
                    cardColor={"white"}
                    percenatgeColor={["red"]}
                />
                <StatsCard
                    titles={["Abandoned Cart", "Customers"]}
                    values={["20%", "30"]}
                    src={cart}
                    bgColor="#FEF5EA"
                    color={["#CC5F5F"]}
                    percenatge={["+ 0.00%", ""]}
                    cardColor="white"
                />
            </div>
            {/* Customer Orders */}
            <CustomerOrder />
        </div>
    )
}

export default OrderContent