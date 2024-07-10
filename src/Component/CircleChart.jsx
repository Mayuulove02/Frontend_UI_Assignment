import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const CircleChart = () => {
    const canvasRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const initializeChart = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (canvas.chart) {
                    canvas.chart.destroy();
                }
                const data = {
                    labels: ['Acquistion', 'Purchase', 'Retention',],
                    datasets: [{
                        label: '',
                        data: [12, 3, 8],
                        backgroundColor: [
                            '#5570F1',
                            '#97A5EB',
                            '#FFCC91',

                        ],
                        hoverOffset: 4
                    }]
                };
                const options = {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    aspectRatio: 1,
                    cutout: '75%',
                    animation: {
                        animateRotate: false
                    }
                };

                canvas.chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data,
                    options: options
                });
            }
        };
        initializeChart();
        return () => {
            const canvas = canvasRef.current;
            if (canvas && canvas.chart) {
                canvas.chart.destroy();
                delete canvas.chart;
            }
        };
    }, []);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
    const marketing =[
        {
            backgroundColor:"#5570F1",
            text:"Acquisition"
        },
        {
            backgroundColor:"#97A5EB",
            text:"Purchase"
        },
        {
            backgroundColor:"#FFCC91",
            text:"Retention"
        }
    ]


    return (
        <>
            <div className="bg-white p-3 rounded-xl shadow">
                <div className="flex justify-between p-3">
                    <div className='flex items-center justify-center h-10 w-10 rounded-xl ml-2' >
                        <h3 className='font-medium text-lg' >Marketing</h3>
                    </div>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:bg-white"
                                id="menu-button"
                                aria-expanded={isOpen}
                                aria-haspopup="true"
                                onClick={toggleDropdown}
                            >
                                This Week
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isOpen && (
                            <div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex="-1"
                                onBlur={closeDropdown}
                            >
                                <div className="py-1" role="none">
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Settings</a>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Profile</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex items-center justify-between ' style={{width:"90%",margin:"auto"}}>
                    {marketing.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.backgroundColor }}></span>
                            <p className="text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="w-48 h-48 mt-4" style={{margin:"auto",marginTop:"2"}}>
                    <canvas ref={canvasRef} id="existing-canvas" />
                </div>
            </div>

        </>
    );
};

export default CircleChart;
