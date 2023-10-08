
import React from 'react';
import './Blockitem.css' ;
import {ImBoxRemove} from 'react-icons/im';

export default function Blockitem(props) {

 

return(
    <div>
      <div className='icon-box'>
        <i className="gg-board">{props.icon()}</i> 
        <h3 className='h3-box'>{props.name}</h3>
      </div>
    </div>
)
}
 