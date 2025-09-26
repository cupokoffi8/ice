import React from 'react';
import logo from '../../ice_logo.png';
import './Main.css';

export default function Main() {
  return (
    <div className="main-container">
      <header className="main-header">
        <img className="main-logo" src={logo} alt="Dino's Ice Cream & Water Ice Logo" />
        <h1>Dino's Ice Cream & Water Ice</h1>
      </header>

      <section className="main-intro">
        <p>
          Welcome to <span className="highlight">Dino's</span>! 🍦  
          We proudly serve the best <strong>ice cream</strong> and <strong>Italian water ice</strong> 
          &nbsp;in the Delaware, Maryland, and Philadelphia areas.  
        </p>
        <p>
          Whether you're craving a classic <em>lemon water ice</em> or something more adventurous like&nbsp;
          <em>mango swirl</em>, we've got you covered.  
        </p>
        <p className="cta-text">
          Perfect for <strong>parties, festivals, and community events</strong> – or just because you deserve a treat!  
        </p>
      </section>

      <section className="main-cta">
        <a href="#menu" className="cta-button">🍧 View Menu</a>
        <a href="#contact" className="cta-button secondary">📅 Book Us</a>
      </section>
    </div>
  );
}
