import React from 'react';

const MonthlyGraph = () => {
  return (
    <div className="flex-grow bg-white rounded-xl shadow-md px-6 py-4 flex flex-col items-end">
      <div className="text-xs font-semibold tracking-wide uppercase py-1 px-3 rounded-full bg-teal-100 text-teal-800">New</div>
      <div className="grid grid-cols-7 gap-1 flex-grow self-stretch mt-4">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <div key={index} className="flex flex-col justify-end items-center">
            <div
              className={`w-4 mx-auto rounded-full ${
                index === 0 || index === 5 || index === 6 ? 'bg-teal-100 h-4' : 'bg-teal-300 h-10'
              }`}
            ></div>
            <div className="text-center text-xs text-gray-400 font-semibold mt-2">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyGraph;
