import React from 'react'
import './card2.css'

const Card2 = props => (
    <div className="Card2">
        <h3>{props.title}</h3>
        <p> {props.text} </p>

    </div>
)

export default Card2