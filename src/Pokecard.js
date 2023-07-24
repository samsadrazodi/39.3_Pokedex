import React from "react";
import './PokeCard.css'


const PokeCard = ({id,item,type,exp})=>(
    <div className="PokeCard">
        <h4 className="PokeCard-title"> {item}</h4>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
    </div>
)
export default PokeCard;