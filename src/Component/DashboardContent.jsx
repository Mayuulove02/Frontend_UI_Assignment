import React from 'react';
import StatsCard from './StatsCard';
import user from "../Assests/StatCard/user.svg";
import volume from "../Assests/StatCard/volume.svg";
import orders from "../Assests/orders.svg";
import cart from "../Assests/StatCard/cart.svg";
import CircleChart from './CircleChart';
import inventory from "../Assests/inventory.svg";
import RecentOrder from './RecentOrder';
import MonthlyGraph from './MonthlyGraph';

const DashboardContent = () => {
    const heights = [80, 30, 60, 15, 75, 40, 70];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <StatsCard
                    titles={["Sales", "Volume"]}
                    values={["₦4,000,000.01", "450"]}
                    src={volume}
                    bgColor="#E0F7FA"
                    percenatge={["", "+ 20%"]}
                    cardColor={"white"}
                />
                <StatsCard
                    titles={["Customers", "Active"]}
                    values={["1,250", "1,180"]}
                    src={user}
                    bgColor="#E8F5E9"
                    percenatge={["+ 15.80%", "85%"]}
                    cardColor={"white"}
                />
                <StatsCard
                    titles={["All Orders", "Pending", "Completed"]}
                    values={["450", "5", "445"]}
                    src={orders}
                    bgColor="#FEF5EA"
                    percenatge={["", ""]}
                    cardColor={"white"}
                />
            </div>
            <div className="mt-6">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 flex flex-col">
                        <div className="flex flex-col lg:flex-row w-full">
                            <div className="w-full lg:w-1/2">
                                <CircleChart />
                            </div>
                            <div className="flex flex-col w-full lg:w-1/2 lg:ml-4 mt-4 lg:mt-0">
                                <div>
                                    <StatsCard
                                        titles={["All Products", "Active"]}
                                        values={["45", "32"]}
                                        src={inventory}
                                        bgColor="#97A5EB"
                                        percenatge={["", "+ 24%"]}
                                        color={["white", "white"]}
                                        valueColor={["white", "white"]}
                                        cardColor="#5570F1"
                                        showDropdown={false}
                                    />
                                </div>
                                <div className="mt-4">
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
                            </div>
                        </div>
                        <div className="mt-6">
                            <MonthlyGraph heights={heights} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:ml-4 mt-6 lg:mt-0">
                        <RecentOrder />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;
