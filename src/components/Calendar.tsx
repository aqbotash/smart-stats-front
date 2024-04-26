import React from 'react';

const Calendar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const leadingDays = Array.from({ length: firstDayOfMonth }, (_, index) => null);
  const monthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const specialDays = [1, 3, 5, 6, 8, 9, 10, 12, 13, 17, 18, 19]; // Example special days

  return (
    <div className="flex flex-col bg-custom-lightblue rounded-lg p-6 shadow-lg">
      <div className="grid grid-cols-7 gap-1.5 mb-5">
        {leadingDays.map((_, index) => (
          <div key={`empty-${index}`} className="w-7 h-7"></div>
        ))}
        {monthDays.map(day => (
          <div 
            key={day} 
            className={`w-7 h-7 flex justify-center items-center rounded-full border border-gray-300 ${
              specialDays.includes(day) ? 'bg-blue-200' : 'bg-[#EFFAFF]'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <button className="bg-blue-400 text-black border-none px-5 py-2.5 rounded-full cursor-pointer text-base shadow-lg font-medium transition-colors duration-300 ease-in-out hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300">
        Check In
      </button>
    </div>
  );
};

export default Calendar;
