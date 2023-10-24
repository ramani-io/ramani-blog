'use client'

import React, { ChangeEvent } from 'react';

interface SearchInputProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ placeholder, onChange }: SearchInputProps) {
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <input
        className="w-full border-2 border-green-500 bg-white h-10 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
