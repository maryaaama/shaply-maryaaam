import React from 'react';
import "./Team.css" ;
import TeamItem from "./TeamItem"

export default function Team(){
    return (
<div className='team'>
    <h1 className='h1team'>Team</h1>
    <p className='pteam'>Check out our team</p>
  <div className='rowsection'>
    <TeamItem img= "./img/team-1.jpg" name='walter wight' rol='Chief executive officer'></TeamItem>
    <TeamItem img='./img/team-2.jpg' name='Sarah Johnson' rol='production manager'></TeamItem>
    <TeamItem img='./img/team-3.jpg' name='William Anderson'  rol='CTO' ></TeamItem>
    <TeamItem img='./img/team-4.jpg' name='Amanda Jepson' rol='Accountants' ></TeamItem>
  </div>
</div>
)
}