import React from 'react';

const ExamCountdown = () => {
  const examDate = new Date('June 14, 2024 00:00:00').getTime(); // Convert to timestamp
  const today = new Date().getTime(); // Convert to timestamp
  const timeLeft = examDate - today;
  const daysLeft = Math.round(timeLeft / (1000 * 60 * 60 * 24));

  const goalScore = "7.0";

  return (
    <div className="flex flex-col bg-white rounded-lg p-6 justify-center items-center">
      <div className="mb-8 text-gray-900 font-bold text-sm">Exam Date: {new Date(examDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      <div className="text-xxl font-bold text-red-600">
        {daysLeft}
      </div>
      <div className="text-sm font-bold">days left</div>
      <div className="h-1 bg-gray-300 w-full my-5"></div>
      <div className="mb-6 items-center">
        My Goal
        <div className="text-blue-600 text-xxl">{goalScore}+</div>
      </div>
      <div className="h-1 bg-gray-300 w-full my-5"></div> 
      <div className="no-underline text-inherit">
        <a href="#setting-goals">Setting Examination Goals</a>
      </div>
    </div>
  );
};

export default ExamCountdown;
