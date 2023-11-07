import React from "react";

import startOn from './images/star-empty.png';
import startOff from './images/star-filled.png';


export default function star(props){
    
    let starIcon = props.isFilled ?  startOff : startOn

    return(
        <img 
                src={starIcon} 
                className="card--favorite"
                onClick={props.handleclick}
                
        />

    );
}