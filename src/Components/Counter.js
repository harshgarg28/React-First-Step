import React from 'react'
import { useState } from 'react';
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase=()=> setCount(count+1);
    const decrease=()=> setCount(count-1);
    const reset=()=> setCount(0);

  return (
    <>
    <div className='container' >
        <h1 className='number'>{count}</h1>



    </div>

    <section className='btns-section'>
    <button className='increment' onClick={increase} >+</button>
    <button className='decrement' onClick={decrease} >-</button>
    <button className='reset' onClick={reset}>Reset</button>


    
    </section>


    </>
  )
}

export default Counter