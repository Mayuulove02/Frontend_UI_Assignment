import { Img } from '@chakra-ui/react';
import React from 'react';

const RecentOrderCard = ({ src, status, color, bgcolor }) => {
    return (
        <>
        <div className='flex mb-2 mt-2'>
            <Img src={src} alt="iphone" />
            <div className='ml-4 flex flex-col '>
                <div className='flex flex-row '>
                    <p className='font-normal text-sm'>iPhone</p>
                    <p className='font-normal text-xs text-gray-400 ml-48'>12 Sept 2022</p>
                </div>
                <div className='flex flex-row  mt-2 items-center justify-center'>
                    <p className='font-medium text-sm'>₦730,000.00 x 1</p>
                    <p className='ml-32 h-6 text-xs w-20 flex items-center justify-center rounded-lg' style={{ color: color, backgroundColor: bgcolor }}>
                        {status}
                    </p>
                </div>
            </div>
        </div> 
        </>
    );
};

export default RecentOrderCard;
