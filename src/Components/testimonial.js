import React, { useState } from 'react'
import './testimonial.css';
import { FaSearch } from "react-icons/fa";










const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote:"This is the best product I have used or whatever",
            author: "Janny Doey"
        },
        {
            quote:"This is the coolest product I have used or whatever",
            author: "John Snowy"
        }
    ]

    const handleNextClick =() => {
        setCurrentIndex(
            (currentIndex + testimonials.length-1) %testimonials.length
        )
    }

    const handlePrevClick =()=>{
        setCurrentIndex(
            (currentIndex + 1) %testimonials.length
        )
    }

    return (
    <>
    <div className='testimonials'>
        <div className='testimonials-quote'></div>
        {testimonials[currentIndex].quote}
        <div className='testimonials-author'></div>
        {testimonials[currentIndex].author}
        <testimonials className="testimonials-nav">
        <button onClick={handleNextClick} >Next</button>
        <button onClick={handlePrevClick} >Prev</button>
        </testimonials>
    </div>


    
    </>
  )
}

export default Testimonial