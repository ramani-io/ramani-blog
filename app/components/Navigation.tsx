"use client";

import React, { useState, ChangeEvent } from "react";
import SearchInput from "./Search";

function Navigation() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // states of the hamburger icon
  const [isOpen, setOpen] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

  };

  return (
    <div className="p-8 border-b-gray-500">
      <div className="flex flex-row justify-left items-center gap-8 px-28 ">
        <h1 className="text-[20px] font-medium font-proxima-nova text-black text-left">
          RamaniAuthors
        </h1>
        <div className="w-[500px]">
          {" "}
          <SearchInput placeholder="Search" onChange={handleSearchChange} />
        </div>
      </div>
      {/* harmburger icon */}
      @todo: smooth transition to an X icon and display to the menu , not in the design , just a nice to have
      <div className="flex flex-row gap-4 px-28 mt-[40px]">
        <div className="flex flex-col justify-center items-center relative space-y-[2px] w-[25px] h-[25px] cursor-pointer  " onClick={() => setOpen((prev) => !prev)}>
         <span className=" absolute h-0.5 p-0.5 w-8  bg-green-500 top-0 rounded-lg"></span>
          <span className=" absolute h-0.5 p-0.5 w-8  bg-green-500 top-2 rounded-lg"></span>
          <span className=" absolute h-0.5 p-0.5 w-8  bg-green-500 bottom-0 rounded-lg"></span>
        </div>
        <div className="h-[20px]">
          <h2 className="text-green-500 font-medium text-lg">All Categories</h2>
        </div>
      </div>
      {/* dropdown menu , triggered by clicking the harmburger icon */}
      
      <div className={isOpen ? "block" : "hidden" }>
      <div className="h-[12em]  w-[12.2em] bg-white relative mx-[6.8em] px-[2px] z-10 grid grid-rows-4 p-4 ">
        <div className="border border-2 border-b-neutral w-48 h-10 p-2 cursor-pointer">Credit & Finance</div>
        <div className="border border-2 border-b-neutral w-48 h-10 p-2 cursor-pointer">Engineering</div>
        <div className="border border-2 border-b-neutral w-48 h-10 p-2 cursor-pointer">Product & Design</div>
        <div className="border border-2 border-b-neutral w-48 h-10 p-2 cursor-pointer">Customer Success</div>
      </div>
      </div>
    </div>
  );
}

export default Navigation;
