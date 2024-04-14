import React from 'react';
import Icons from './icons';
import Link from 'next/link';
// components/CircleColumn.js
export default function CircleColumn() {
  return (
    <div className="flex flex-col items-center space-y-4 bg-white rounded-lg p-6">
      <div className="w-32 h-32  bg-white shadow-lg rounded-full flex items-center justify-center"><Link href={'/'}>
        <Icons.listening />
      </Link></div>
      <div className="w-32 h-32 bg-white shadow-lg  shadow-custom-blue rounded-full  flex items-center justify-center"><Link href={'/'}>
        <Icons.reading />
      </Link></div>
      <div className="w-32 h-32 bg-white shadow-lg  rounded-full  flex items-center justify-center"><Link href={'/'}>
        <Icons.speaking />
      </Link></div>
      <div className="w-32 h-32 bg-white shadow-lg  rounded-full  flex items-center justify-center"><Link href={'/'}>
        <Icons.writing />
      </Link></div>
    </div>
  );
}

  