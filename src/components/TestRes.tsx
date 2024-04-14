import React from 'react';

const TestRes = () => {
  const squares = Array.from({ length: 20 }, (_, index) => (
    <div
      key={index}
      className={`w-8 h-8 ${Math.random() > 0.3 ? 'bg-blue-500' : 'bg-gray-300'} mr-2`}
    />
  ));

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Attented tests in the past 3 month</h2>
      <div className="flex mb-2">
        {squares}
      </div>
    </div>
  );
};

export default TestRes;
