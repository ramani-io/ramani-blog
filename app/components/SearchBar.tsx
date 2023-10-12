'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    return (
        <div className="w-full  border-solid border-2 border-green-600 p-2 rounded-full flex justfy-center" >
            <FontAwesomeIcon icon={faSearch} size="1x" color="grey" className='p-2'/>
            <input type='search' placeholder='Search...' className='w-full ' />
        </div>


    )
}

export default SearchBar