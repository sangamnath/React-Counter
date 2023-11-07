import React from "react";
import boxes from "./boxes";

export default function Box(props){

    const [on, setOn] = React.useState(props.on)

    const styles ={

        backgroundColor: on?"#222222":"transparent"
    }

    function toggle(){

        setOn(prevOn => !prevOn)
    }

    return (

        <div className="box" style={styles} onClick={toggle}></div>
    )


    

}

