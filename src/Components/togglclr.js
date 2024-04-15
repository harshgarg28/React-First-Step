import React, { useState } from 'react'
import './toggleclr.css';

const Togglclr = () => {
  
  const [backgroundColor, setbackgroundColor] = useState('white');
  const [textColor, settextColor] = useState('#1b1b1b')
  const [buttonStyle, setbuttonStyle] = useState('white')
  
  function handleClick() {
    setbackgroundColor(backgroundColor==="white"?"#1b1b1b" : "white");
    settextColor(textColor=== "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setbuttonStyle((backgroundColor==="white" ?"#1b1b1b" : "white"))
  }
  
  
    return (
    <>

    <section style={{backgroundColor, color:textColor}}    >
        <button onClick={handleClick} style = {{
          buttonStyle,
          color:textColor,
          border:'2px solid ${textColor}',
        }} >
         {backgroundColor=="#1b1b1b" ? "Black Theme" : "White Theme"} </button>


          <section className='content'>
    <h1>Welcome to <br/> a real world</h1>

    </section>
    </section>
    

    
    </>
  )
}

export default Togglclr