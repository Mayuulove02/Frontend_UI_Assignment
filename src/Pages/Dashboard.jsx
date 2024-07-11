import React from 'react';
import Sidebar from '../Component/Sidebar';
import Navbar from '../Component/Navbar';
import DashboardContent from '../Component/DashboardContent';

const Dashboard = () => {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full" > 
        <Navbar title="Dashboard"/>
        <div className="flex-grow p-1"> 
        <DashboardContent />
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
