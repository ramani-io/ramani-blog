'use client'
import SearchBar from "./components/SearchBar"
export default function Home() {
  return (
    <div className="flex flex-row px-22 w-3/4 mt-2 mx-auto">
      <p className="text-lg font-bold p-2">RamaniAuthors</p>
      <div className="block w-full" >
        <SearchBar />
      </div>

    </div>
  )
}
