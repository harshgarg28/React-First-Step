import './App.css';
import React, { useState } from 'react';
import Login from './login';
import Selection from './selection.js'
import Confirm from './confirm.js';

function Ticket() {

  const [page, setPage] = useState(0);
  const handleLogin = () => {
    setPage(1);
    console.log(page)
  };

  const handleSubmission = () => {
    setPage(2);
    console.log(page);
  }

 

  return (
    <div className="App">

      {
      page === 0 ? (
        <Login onLogin={handleLogin} />
      ) : page === 1 ? (
        <Selection onSubmission={handleSubmission} />
      ) : (
        <Confirm />
      )
      }
    
    



    </div>
  );
} 

export default Ticket;
