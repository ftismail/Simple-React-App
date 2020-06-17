import React from 'react';
import './card-list.css';
import Card from '../card/card'
const ClassList = (props)=>{
    return (
      <div className="container">
        {props.monsters.map(e => (
          <Card key={e.id} monsterName = {e.name} imgSrc= {e.id}/>))}
      </div>
    )
        }
export default ClassList