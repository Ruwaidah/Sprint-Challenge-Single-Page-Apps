import React, { useEffect, useState} from "react";
import axios from "axios";

export default function LocationCard(props) {  
  
  return (
    <div className = "locationcard">
      <h2>{props.location.name}</h2>
      <p>Type: {props.location.type}</p>
      <p>Dimension: {props.location.dimension}</p>
    </div>
  )
}



// { name, type, dimension, residents }