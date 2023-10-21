'use client'

import React, { useState, ChangeEvent } from 'react';
import SearchInput from './search';



function Navigation() {

  const [searchTerm, setSearchTerm] = useState<string>(''); 

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setSearchTerm(e.target.value);
    
  };

  return (
    <div className="p-8 border-b-gray-500">
      <div className="flex flex-row justify-left items-center gap-8 px-28 ">
        <h1 className="text-[20px] font-medium font-proxima-nova text-black text-left">RamaniAuthors</h1>
        <div className="w-[500px]"> <SearchInput placeholder="Search" onChange={handleSearchChange} /></div>
        
      </div>
      <div className="flex flex-row gap-4 px-28 mt-[40px]">
        <div className="w-[20px] h-[20px] bg-green-500"></div>
        <h2 className="text-green-500 font-medium text-[14px]">All Categories</h2>
      </div>
    </div>
  )
}

export default Navigation