"use client";

import  { SearchManufacture }  from "@/components";
import { useState } from "react";

const SearchBar = () => {
    const [ manufacturer, setManufacturer] = useState('')
    const handleSubmit = () => {}
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className='searchbar__item'>
            <SearchManufacture manufacturer={manufacturer} setManufacturer={setManufacturer} />
        </div>
    </form>
  )
}

export default SearchBar