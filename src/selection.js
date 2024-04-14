import React, { useState } from 'react';
import './selection.css';


function Seat(props) {
    return (
        <button className={'seat-block ' + (props.value ? 'selected': '')}  onClick={props.onSeatClick}> {props.value} </button>
    );
};



function Selection(props) {


    const [obj, setObj] = useState([
        { number: 1, owner: null },
        { number: 2, owner: null },
        { number: 3, owner: null },
        { number: 4, owner: null },
        { number: 5, owner: null },
        { number: 6, owner: null },
        { number: 7, owner: null },
        { number: 8, owner: null },
        { number: 9, owner: null },
        { number: 10, owner: null },
        { number: 11, owner: null },
        { number: 12, owner: null },
        { number: 13, owner: null },
        { number: 14, owner: null },
        { number: 15, owner: null },
        { number: 16, owner: null },
        { number: 17, owner: null },
        { number: 18, owner: null },
        { number: 19, owner: null },
        { number: 20, owner: null },
        { number: 21, owner: null },
        { number: 22, owner: null },
        { number: 23, owner: null },
        { number: 24, owner: null },
        { number: 25, owner: null },
      ]);


    const username = "username";

    const [isSeatFull, setIsSeatFull] = useState(0);
    const [seats, setSeats] = useState(Array(25).fill(0));
    const [owner, setOwner] = useState(Array(0).fill(''));

    function handleClick(i) {
        const nextSeats = seats.slice();
        const nextOwner = owner.slice();

        if (isSeatFull) {
            nextSeats[i]=1;
            nextOwner[i]=username;
            console.log(i + " is filled");
        }
        else{
            nextSeats[i]=0;
            nextOwner[i]="";
            console.log(i + " is unfilled");
        }
        setSeats(nextSeats);
        setOwner(nextOwner);
        setIsSeatFull(!isSeatFull);

        

    }

    const handleList = () =>{
        console.log(seats);
    }




    // function handleSubmission(){
    //     const nextSeats = seats.slice();
    //     console.log(nextSeats);
    // };

return (
    <>
    <div className='selection-container'>
    
    

    <div className="seats-row">
        <Seat value={seats[0]} onSeatClick={() => handleClick(0)} />
        <Seat value={seats[1]} onSeatClick={() => handleClick(1)} />
        <Seat value={seats[2]} onSeatClick={() => handleClick(2)} />
        <Seat value={seats[3]} onSeatClick={() => handleClick(3)} />
        <Seat value={seats[4]} onSeatClick={() => handleClick(4)} />
    </div>

    <div className="seats-row">
        <Seat value={seats[5]} onSeatClick={() => handleClick(5)} />
        <Seat value={seats[6]} onSeatClick={() => handleClick(6)} />
        <Seat value={seats[7]} onSeatClick={() => handleClick(7)} />
        <Seat value={seats[8]} onSeatClick={() => handleClick(8)} />
        <Seat value={seats[9]} onSeatClick={() => handleClick(9)} />
    </div>

    <div className="seats-row">
        <Seat value={seats[10]} onSeatClick={() => handleClick(10)} />
        <Seat value={seats[11]} onSeatClick={() => handleClick(11)} />
        <Seat value={seats[12]} onSeatClick={() => handleClick(12)} />
        <Seat value={seats[13]} onSeatClick={() => handleClick(13)} />
        <Seat value={seats[14]} onSeatClick={() => handleClick(14)} />
    </div>

    <div className="seats-row">
        <Seat value={seats[15]} onSeatClick={() => handleClick(15)} />
        <Seat value={seats[16]} onSeatClick={() => handleClick(16)} />
        <Seat value={seats[17]} onSeatClick={() => handleClick(17)} />
        <Seat value={seats[18]} onSeatClick={() => handleClick(18)} />
        <Seat value={seats[19]} onSeatClick={() => handleClick(19)} />
    </div>
{/* 
    <div className="seats-row">
        <Seat value={seats[20]} onSeatClick={() => handleClick(20)} />
        <Seat value={seats[21]} onSeatClick={() => handleClick(21)} />
        <Seat value={seats[22]} onSeatClick={() => handleClick(22)} />
        <Seat value={seats[23]} onSeatClick={() => handleClick(23)} />
        <Seat value={seats[24]} onSeatClick={() => handleClick(24)} />
    </div> */}


    <button className='submit' style={{backgroundColor:"Blue"}} type="button" onClick={props.onSubmission}>
                Submit
    </button>

    <div>
              <h3>Seats booked by {username}</h3>
              <ul>
                {seats.map((bit, index) => (
                    bit === 1 && <li key={index}>Seat: {index}</li>
                    )
                )}
              </ul>
    </div>



    </div>
    </>
);

};

export default Selection;