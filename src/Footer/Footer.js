import React from 'react';
import "./Footer.css";
import {AiFillLinkedin} from 'react-icons/ai';
import {BsSkype} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai'
export default function Footer()  {
    return(
        <div className='footercontainer'>
            <section className='column'>
                <h1>shaply-maryaaamgit</h1>
                <h2>tehran azadi street</h2>
                <h3>telephone:01234567895</h3>
                <h3>email: info@example.com</h3>
                <div className='rowfooter'>
                    <a className='linkelem' href='#'><AiFillLinkedin/></a>
                    <a className='linkelem' href='#'><BsSkype/></a>
                    <a className='linkelem'  href='#'><GrInstagram/></a>
                    <a className='linkelem' href='#' ><AiFillFacebook/></a>
                    <a className='linkelem'  href='#'><AiFillTwitterSquare/></a>
                </div>
            </section>
            <section className='colummn'>
                <h2>Useful links</h2>
                <ul className='ulstyle'>
                    <li><a className='listyle'>home</a></li>
                    <li><a className='listyle'>about us</a></li>
                    <li><a className='listyle' >services</a></li>
                    <li><a className='listyle'>Terms of Service</a></li>
                    <li><a className='listyle'>Privacy policy</a></li>
                </ul>
            </section>
            <section className='colummn' >
            <h2>our services</h2>
            <ul className='ulstyle'>
                    <li><a className='listyle'>Graphic Design</a></li>
                    <li><a className='listyle'>Web Design</a></li>
                    <li><a className='listyle' >Web Development</a></li>
                    <li><a className='listyle'>Production management</a></li>
                    <li><a className='listyle'>Marketing</a></li>
                </ul>
            </section>
            <section className='columnn'>
                <h1>news</h1>
                <p>However, none of the things I read will be our great fault</p>
                <form className='form'>
                    <input type='email' name='email'></input>
                    <label>following</label>
                </form>
            </section>
        </div>
    )

}