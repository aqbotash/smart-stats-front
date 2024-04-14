import React from 'react';

const AttendanceTracker = () => {
  const rows = 3;
  const cols = 20;

  const generateAttendanceData = () => {
    const attendanceData = [];
    for (let i = 0; i < rows * cols; i++) {
      attendanceData.push(Math.random() > 0.3); 
    }
    return attendanceData;
  };

  const renderSquare = (present: boolean, index: number) => { 
    return (
      <div
        key={index}
        className={`w-8 h-8 ${present ? 'bg-blue-500' : 'bg-gray-300'}`}
      />
    );
  };

  const renderGrid = () => {
    const attendanceData = generateAttendanceData();
    const grid = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const index = i * cols + j;
        row.push(
          <div key={index} className="mr-2">
            {renderSquare(attendanceData[index], index)}
          </div>
        );
      }
      grid.push(<div key={i} className="flex mb-2">{row}</div>);
    }

    return grid;
  };

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Attendance in the past 3 months</h2>
      <div>
        {renderGrid()}
      </div>
    </div>
  );
};

export default AttendanceTracker;
