import React, { useState } from 'react';
import './countries.css';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [stage, setStage] = useState(false);
  const [isData, setIsData] = useState(false);
  const [i, setI] = useState("");
  const [isActive, setIsActive] = useState(false);

  function getCountries () {
    fetch('https://countryinfoapi.com/api/countries')
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
    setIsData(true);
  }
  
  const getRandomCountry = () => {
    setI(Math.floor(Math.random() * countries.length));
    setStage(true);
  };

  return (
    <>
    {
        stage && 
        <div className='country-card'>
            <h1 className='country' >{countries[i].name}</h1>
            <h1>Capital: {countries[i].capital[0]}</h1>
            <h1>Population: {countries[i].population}</h1>
            <h1> {countries[i].subregion} in {countries[i].region} in {countries[i].continents[0]}n continent </h1>
            <img src={countries[i].flag} alt='flag'/>

            <button className='states'onClick={()=> setIsActive(!isActive)}>Neighbours</button>
            <div className='borders' >
              <ul>
                { isActive && countries[i].borders.map(
                  (b)=>(
                  <li id={Math.floor(Math.random()*1000)} >{b}</li>
                  )
                )}
              </ul>  
            </div>
        </div>
    }
    {isData && <button onClick={getRandomCountry}>Fetch Country</button>}
    <br/>
    <button onClick={getCountries}>Fetch Data</button>
   
    </>
  );
}

export default Countries;