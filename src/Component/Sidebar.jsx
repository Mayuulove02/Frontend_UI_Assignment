import { Img, Text, Box, Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
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
  const [isMobileOpen, setIsMobileOpen] = useState(true); // Set to true to show hamburger icon by default

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', openIcon: dashboardOpen, closedIcon: dashboardClosed, link: "/" },
    { name: 'Orders', openIcon: ordersOpen, closedIcon: ordersClosed, link: "/orders" },
    { name: 'Customers', openIcon: customersOpen, closedIcon: customersClosed, link: "/coming-soon" },
    { name: 'Inventory', openIcon: inventoryOpen, closedIcon: inventoryClosed, link: "/coming-soon" },
    { name: 'Conversations', openIcon: conversationsOpen, closedIcon: conversationsClosed, link: "/coming-soon" },
    { name: 'Settings', openIcon: settingsOpen, closedIcon: settingsClosed, link: "/coming-soon" },
  ];

  return (
    <Box display={{ base: 'block', md: 'flex' }}>
      {/* <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={isMobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle Sidebar"
        onClick={toggleMobileSidebar}
        m={4}
      /> */}
      <Box
        as="nav"
        className={`flex flex-col h-screen p-4 bg-white shadow-lg ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300`}
        display={{ base: isMobileOpen ? 'block' : 'none', md: 'flex' }}
      >
        <Flex
          onClick={toggleSidebar}
          className="p-2 focus:outline-none cursor-pointer">
          {isOpen ? (
            <Flex alignItems="center">
              <Img src={logo} alt='logo' className="w-8 h-8" />
              <Text className='font-bold text-xl ml-2'>Metrix</Text>
            </Flex>
          ) : (
            <Flex justifyContent="center">
              <Img src={logo} alt='logo' className="w-8 h-8" />
            </Flex>
          )}
        </Flex>
        <Flex flexDir="column" mt={2} flexGrow={1} spaceY={4}>
          {menuItems.map((item) => (
            <Link to={item.link} className={`p-3 hover:bg-[#5570F1] hover:text-white hover:rounded-xl ${location.pathname === item.link ? 'bg-[#5570F1] text-white rounded-xl' : ''}`} key={item.name}>
              {isOpen ? (
                <Flex alignItems="center">
                  <Img src={item.openIcon} alt={item.name} className="w-6 h-4" />
                  <Text className='text-sm ml-4'>{item.name}</Text>
                </Flex>
              ) : (
                <Flex justifyContent="center">
                  <Img src={item.closedIcon} alt={item.name} className="w-6 h-4" />
                </Flex>
              )}
            </Link>
          ))}
        </Flex>
        <Box className="p-2 focus:outline-none cursor-pointer bg-[#5E63661A] rounded-xl mb-3">
          {isOpen ? (
            <Flex alignItems="center">
              <Img src={headphones} alt='logo' className="w-8 h-4" />
              <Text className='text-sm ml-2'>Contact Support</Text>
            </Flex>
          ) : (
            <Flex justifyContent="center">
              <Img src={headphones} alt='logo' className="w-8 h-4" />
            </Flex>
          )}
        </Box>
        <Box className="p-2 focus:outline-none cursor-pointer bg-[#FFCC9133] rounded-xl mb-3">
          {isOpen ? (
            <>
              <Flex alignItems="center">
                <Img src={gift} alt='logo' className="w-8 h-4" />
                <Text className='text-sm ml-2'>Free Gift Awaits You!</Text>
              </Flex>
              <Flex alignItems="center" p={2} mt={2}>
                <Text className='text-xs'>Upgrade your account</Text>
                <Img src={arrow} alt='logo' className="w-8 h-2" />
              </Flex>
            </>
          ) : (
            <Flex justifyContent="center">
              <Img src={gift} alt='logo' className="w-8 h-4" />
            </Flex>
          )}
        </Box>
        <Box className="p-2 focus:outline-none cursor-pointer text-[#CC5F5F] rounded-xl">
          {isOpen ? (
            <Flex alignItems="center">
              <Img src={logout} alt='logo' className="w-8 h-4" />
              <Text className='text-sm ml-2'>Logout</Text>
            </Flex>
          ) : (
            <Flex justifyContent="center">
              <Img src={logout} alt='logo' className="w-8 h-4" />
            </Flex>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
