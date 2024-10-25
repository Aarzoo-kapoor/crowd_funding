import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
          <nav className="nav">
            <div id="head">FundRaiser</div>
            <div>Home</div>
            <div>Donate</div>
            <div>About Us</div>
            <div>Contact</div>
            <div id="sign">
             
                <button id="in">Sign In</button>
              
              
                <button id="up">Sign Up</button>
              
            </div>
          </nav>
        </header>
      );
    };
 

export default Navbar