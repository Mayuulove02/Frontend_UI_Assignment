import React from 'react'
import RecentOrderCard from './RecentOrderCard';
import goldIphone from "../Assests/StatCard/goldIphone.png"
import blackIphone from "../Assests/StatCard/blackIphone.png"

const RecentOrder = () => {
    return (
        <div className='p-2 rounded-xl shadow bg-white'>
            <h3 className='text-left p-2 text-lg'>Recent Orders</h3>
            <RecentOrderCard src={goldIphone} color={"#CC5F5F"} status={"Pending"} bgcolor={"#F57E771F"} />
            <hr />
            <RecentOrderCard src={blackIphone} color={"#519C66"} status={"Completed"} bgcolor={"#32936F1F"} />
            <hr />
            <RecentOrderCard src={goldIphone} color={"#CC5F5F"} status={"Pending"} bgcolor={"#F57E771F"} />
            <hr />
            <RecentOrderCard src={blackIphone} color={"#519C66"} status={"Completed"} bgcolor={"#32936F1F"} />
            <hr />
            <RecentOrderCard src={blackIphone} color={"#519C66"} status={"Completed"} bgcolor={"#32936F1F"} />
            <hr />
            <RecentOrderCard src={blackIphone} color={"#519C66"} status={"Completed"} bgcolor={"#32936F1F"} />
            <hr />
            <RecentOrderCard src={goldIphone} color={"#CC5F5F"} status={"Pending"} bgcolor={"#F57E771F"} />
            <hr />
            <RecentOrderCard src={goldIphone} color={"#CC5F5F"} status={"Pending"} bgcolor={"#F57E771F"} />
            <hr />
            <RecentOrderCard src={goldIphone} color={"#CC5F5F"} status={"Pending"} bgcolor={"#F57E771F"} />
        </div>
    )
}

export default RecentOrder