import React from 'react';
import "./Team.css" ;
import {AiFillLinkedin} from 'react-icons/ai';
import {BsSkype} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {AiFillFacebook} from 'react-icons/ai';

export default function TeamItem(props) {
    return(
        <div className='seection'>
    <img className='imgsection' src={props.img}/>
        <div className='sosialmedia'>
         <a className='linkelem' href='#'><AiFillLinkedin/></a>
         <a className='linkelem' href='#'><BsSkype/></a>
         <a className='linkelem'  href='#'><GrInstagram/></a>
         <a className='linkelem' href='#' ><AiFillFacebook/></a>
        </div>
        <div className='onvan'>
            <h4>{props.name}</h4>
            <span className='onvanspan'>{props.rol}</span>
        </div>
    </div>
    )
}