import React from 'react';
import './aboutPageCard.css'
import Shape from '../circle-shape/Shape';

const AboutPageCard = (props) => {
  return (
    <div className='card-item'>
      <h3>{props.title}</h3>
      <div className='listContainer'>
        {props.contents.map((cur,ind)=>{
          return (<div className='listItem' key={ind} ><Shape key={ind} /> {cur}</div>);
        })}
      </div>
    </div>
  )
}

export default AboutPageCard;