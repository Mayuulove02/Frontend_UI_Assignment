import React from 'react';
import Sidebar from '../Component/Sidebar';
import Navbar from '../Component/Navbar';
import OrderContent from '../Component/OrderContent';

const Orders = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full" >
          <Navbar title="Orders" pageName="Orders" />
          <div className="flex-grow p-1">
            <OrderContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
