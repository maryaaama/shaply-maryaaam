
//import logo from './logo.svg';
import React from 'react';
import "./Description.css";

export default function Description(props) {
 
  return (
    <div className='container'>
      <div  className='section'>
      <h1 className='description'>{props.name}</h1>
      <p className='Pdescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <img className='imgdescription' src={props.image} />
      </div>
      
    </div>
  )
}



