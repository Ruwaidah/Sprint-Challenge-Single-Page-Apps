import React from "react";

//  Component for each Character info
export default function CharacterCard(props) {
  return (
    <div className = "CharacterCard"> 
          <img src = {props.character.image} />
          <h2>{props.character.name}</h2>
          <p>Species: {props.character.species}</p>
          <p>Gender: {props.character.gender}</p>
    </div>
  )
}
