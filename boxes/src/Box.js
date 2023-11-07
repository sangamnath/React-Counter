import React from "react";
import boxes from "./boxes";

export default function Box(props){

    // // derived props
    // const [on, setOn] = React.useState(props.on)

    const styles ={

        backgroundColor: props.on?"#222222":"transparent"
    }

   

    return (

        <div className="box" style={styles} onClick={ ()=>props.handleClick(props.id) }></div>
    )


    

}

