import React, { useState } from 'react'
import './HIddenSearch.css';
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgcolor, setBgcolor] = useState("white");

    const handleClick = e => {
        setBgcolor("#1a1a1a")
        if (e.target.className==="container") {
            setShowInput(false);
            setBgcolor("fff")
        }
    }

  
    return (
    <>
    <section className='container' style={{backgroundColor:bgcolor}} onClick={handleClick} >
        {
        showInput ? (
            <input type="text" placeholder='Search...'/>
        ):(
            <FaSearch onClick={ ()=>setShowInput(true)} />
        )}
    </section>

    
    </>
  )
}

export default HiddenSearchBar