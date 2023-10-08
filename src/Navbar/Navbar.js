import React from 'react';
import "./Navbar.css" ;
 
export default function Navbar(){
    return (
      <div>
        <header id='header' className='fix-top'>
           <div className='nav-countainer'>
              <h1><a href='#' className='nav-logo'>shaply-maryaaam</a></h1>
            <nav>
              <ul className='nav-ul'>
                <li><a href='#' className='nav-link'>Home</a></li>
                <li><a href='#' className='nav-link'>News</a></li>
                <li><a href='#' className='nav-link'>About</a></li>
                <li><a href='#' className='nav-link'>Countact</a></li>
              </ul>
            </nav>
            <a className='getStarted' href='#'>start</a>
           </div>
           </header>
      </div>  
   )
 }
