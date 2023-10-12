'use client'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Searchbar() {
  return (
    <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
            <input
                type="text"
                className=" w-full border border-green-300 bg-transparent focus:outline-none px-12 py-2 rounded-full"
                placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 pl-3 pr-4 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
        
    </div>
  )
}

export default Searchbar