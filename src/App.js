//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Blockitem from './block/Blockitem';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';
import Description from './Description/Description';
import {ImBoxRemove} from 'react-icons/im';
import {FaBoxTissue} from 'react-icons/fa';
import {BsPersonBoundingBox} from 'react-icons/bs';
import Footer from './Footer/Footer';
import Team from './team/Team';
function App() {
 
  return (
   
    <div className="App">
    <Navbar/>
    <div className="Slide">
    <Slider> </Slider>
    <div className='row'>
    <Blockitem name='fasion' icon={ImBoxRemove}></Blockitem>
    <Blockitem name='busines' icon={FaBoxTissue}></Blockitem>
    <Blockitem name='Services' icon={BsPersonBoundingBox}></Blockitem>
    </div>
    </div>
    <Description name='lebas' image='img/2.jpg'></Description>
    <Description name='shalvar' image='img/1.jpg'></Description>
    <Team></Team>
    <Footer></Footer>
    </div>
  );
}

export default App;
