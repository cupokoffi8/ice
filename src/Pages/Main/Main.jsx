import React from 'react';
import './Main.css';

export default function Main(){
    return (
        <>
          <div className='main-container'>
            <h1 className='main-header'><img className='main-logo' src='../../ice_logo.png' /> Dino's Ice Cream & Water Ice</h1>
            <p>
                Welcome to Dino's Water Ice! We serve the best water ice in town with a variety of delicious flavors to choose from. 
                Whether you're craving a classic lemon or something more adventurous like mango, we've got you covered. 
                Stop by and treat yourself to a refreshing delight today!
            </p>
          </div>
        </>
    );
}