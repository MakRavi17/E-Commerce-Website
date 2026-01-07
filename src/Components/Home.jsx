import React from 'react';
import './Home.css';
import Cartform from "./Cartform";

const Home = () => {
  return (
    <div className='home_header'>
      <div className='data'>
          <div className='home_container'>
            <h1>Hair</h1>
            <p>
              Start from the top. we've got you covered
              with a range of formulas
              to keep your hair in tip-top shape and your 
              style in mint condition.
            </p>
            <button className='Shampoobtn'>Shop Shampoo</button>
          </div>
      </div>
        <Cartform />
    </div>
  )
}

export default Home