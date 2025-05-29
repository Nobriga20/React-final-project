
import React, { useEffect, useState } from "react";

const [data, setData] = useState(null);
const [input, setInput] = useState("")
const getData = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=dd4916f0`);
    const result = await response.json();
    console.log (result)
    setData(result);
  };
  useEffect(() => {

  }, []);


function Header () {
    return (
        <>
         
       <img
       
       src="./module 4 prject assets/55555.jpg"
       
       className="movie__logo"
       
       alt=""
       
       />
        <div class="header__tag">
       
        <h1 className="browse__tag">Browse Our Movies</h1>
        
        </div>
        
        <div className="browse__list">
        
        <input  value={input}
              onChange={(e) => setInput(e.target.value)}type="text" id="searchInput" placeholder="Search..." />
        
        <button onClick={getData} className="search__btn">Search</button>
        
        <div id="results"></div>
        
        </div>
        
        </>
    )
}

export default Header