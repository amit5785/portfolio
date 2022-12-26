import React from 'react'
import './workcard.css'

const Workcard = (props) => {
  return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3>{props.title}</h3> 
            <br/>
            <h5>{props.applicationType}</h5>
          </div>

          <div className="flip-card-back">
            <h3>Description</h3><br/>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  )
}

export default Workcard;