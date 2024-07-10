import { Img, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from "../Assests/logo.png";
import dashboardOpen from "../Assests/dashboard.svg";
import dashboardClosed from "../Assests/dashboard.svg";
import ordersOpen from "../Assests/orders.svg";
import ordersClosed from "../Assests/orders.svg";
import customersOpen from "../Assests/customer.svg";
import customersClosed from "../Assests/customer.svg";
import inventoryOpen from "../Assests/inventory.svg";
import inventoryClosed from "../Assests/inventory.svg";
import conversationsOpen from "../Assests/conversations.svg";
import conversationsClosed from "../Assests/conversations.svg";
import settingsOpen from "../Assests/settings.svg";
import settingsClosed from "../Assests/settings.svg";
import headphones from "../Assests/headphones.svg";
import gift from '../Assests/gift.svg';
import arrow from "../Assests/arrow.svg";
import logout from "../Assests/logout.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', openIcon: dashboardOpen, closedIcon: dashboardClosed },
    { name: 'Orders', openIcon: ordersOpen, closedIcon: ordersClosed },
    { name: 'Customers', openIcon: customersOpen, closedIcon: customersClosed },
    { name: 'Inventory', openIcon: inventoryOpen, closedIcon: inventoryClosed },
    { name: 'Conversations', openIcon: conversationsOpen, closedIcon: conversationsClosed },
    { name: 'Settings', openIcon: settingsOpen, closedIcon: settingsClosed },
  ];

  return (
    <div className={`flex flex-col h-screen p-4 ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300`} >
      <div
        onClick={toggleSidebar}
        className="p-2 focus:outline-none cursor-pointer">
        {isOpen ? (
          <div className='flex items-center'>
            <Img src={logo} alt='logo' className="w-8 h-8" />
            <h3 className='font-bold text-xl ml-2'>Metrix</h3>
          </div>
        ) : (
          <div className='flex justify-center'>
            <Img src={logo} alt='logo' className="w-8 h-8" />
          </div>
        )}
      </div>
      <div className={`flex flex-col mt-2 space-y-4 flex-grow`}>
        {menuItems.map((item) => (
          <a href="#" className="p-3 hover:bg-[#5570F1] hover:text-white hover:rounded-xl" key={item.name}>
            {isOpen ? (
              <div className='flex items-center'>
                <Img src={item.openIcon} alt={item.name} className="w-6 h-4" />
                <h3 className='text-sm ml-4'>{item.name}</h3>
              </div>
            ) : (
              <div className='flex justify-center'>
                <Img src={item.closedIcon} alt={item.name} className="w-6 h-4" />
              </div>
            )}
          </a>
        ))}
      </div>
      <div
        className="p-2 focus:outline-none cursor-pointer bg-[#5E63661A] rounded-xl mb-3">
        {isOpen ? (
          <div className='flex items-center'>
            <Img src={headphones} alt='logo' className="w-8 h-4" />
            <h3 className=' text-sm ml-2'>Contact Support</h3>
          </div>
        ) : (
          <div className='flex justify-center'>
            <Img src={headphones} alt='logo' className="w-8 h-4" />
          </div>
        )}
      </div>
      <div
        className="p-2 focus:outline-none cursor-pointer bg-[#FFCC9133] rounded-xl mb-3">
        {isOpen ? (
          <>
            <div className='flex items-center'>
              <Img src={gift} alt='logo' className="w-8 h-4" />
              <h3 className=' text-sm ml-2'>Free Gift Awaits You!</h3>
            </div>
            <div className='flex items-center p-2 mt-2'>
              <p className='text-xs'>Upgrade your account</p>
              <Img src={arrow} alt='logo' className="w-8 h-2" />
            </div>
          </>
        ) : (
          <div className='flex justify-center'>
            <Img src={gift} alt='logo' className="w-8 h-4" />
          </div>
        )}
      </div>
      <div
        className="p-2 focus:outline-none cursor-pointer text-[#CC5F5F] rounded-xl">
        {isOpen ? (
          <div className='flex items-center'>
            <Img src={logout} alt='logo' className="w-8 h-4" />
            <h3 className=' text-sm ml-2 '>Logout</h3>
          </div>
        ) : (
          <div className='flex justify-center'>
            <Img src={logout} alt='logo' className="w-8 h-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
