import React from 'react'
import "./Card.css"
import mern from "../../../assets/mern.png";
function Card(title,image) {
  return (
    <div className="card">
      <h1>Mern Stack Web Developer</h1>  
      <div className="hovercard">
        <img src={mern} alt="" />
      </div>
    </div>
  )
}

export default Card
