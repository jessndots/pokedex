import React from "react";
import "./Pokecard.css"

const Pokecard = ({id, name, type, xp}) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    console.log(img);
    return (
        <div className="Pokecard">
            <h3>{name}</h3>
            <img src={img} alt=""/>
            <p>Type: {type}</p>
            <p>EXP: {xp}</p>
        </div>
    )
}

export default Pokecard