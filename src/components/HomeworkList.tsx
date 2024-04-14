import React from 'react';

interface HomeworkListProps {
  homeworkItems: string[];
}

const HomeworkList: React.FC<HomeworkListProps> = ({ homeworkItems }) => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold mb-4">Homework</h1>
      <ul>
        {homeworkItems.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 mr-2" />
            <span className="text-gray-800 text-xs">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeworkList;
