"use client"

import React, {useState, useEffect} from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const[search, setSearch] = useState(false);
  const[searchParam, setSearchParam] = useState("");

  useEffect( () => {
    console.log(searchParam, "ok")
    router.push(pathname + '?search=' + searchParam)
  }, [searchParam])


  return (
    <>
        <div className={`relative ${search == true ? 'w-[250px]' : null} h-[50px] mt-0 mb-0 flex items-center justify-center`}>
            <input className={`absolute left-0 bg-transparent border-1 border-gray-500 rounded-sm pl-10 ${search == true ? null : 'hidden'}`} onChange={(e) => setSearchParam(e.target.value) } />
            <FiSearch size={search == true ? 20 : 25} className={`absolute ${search == true ? 'left-2' : 'right-0' }`} onClick={() => setSearch(true)} />
        </div>
    </>
  )
}

export default SearchBar