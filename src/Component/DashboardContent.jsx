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
            <div className="grid grid-cols-3 gap-4">
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
            <div className="mt-2">
                <div className="flex">
                    <div className='' style={{ width: "66.67%" }}>
                        <div style={{ flex: 1, display: 'flex', width: "100%" }}>
                            <div style={{ width: "48.99%" }}>
                                <CircleChart />
                            </div>
                            <div className="flex flex-col ml-4" style={{ width: "49.33%" }}>
                                <div >
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
                                <div className='mt-3'>
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
                        <div className="mt-4">
                            <MonthlyGraph heights={heights} />
                        </div>
                    </div>
                    <div style={{ width: "32.33%", marginLeft: "10px" }}>
                        <RecentOrder />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardContent;
