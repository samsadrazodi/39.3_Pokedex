import React from "react";
import PokeCard from './Pokecard';
import './Pokedex.css'
const Pokedex = ({items})=>{

    return(
        <div className="Pokedex">
            {items.map(i=>(
            <PokeCard id={i.id} item={i.name} type={i.type} exp={i.base_experience} />
            
          ))}
        </div>

    )
}

export default Pokedex;