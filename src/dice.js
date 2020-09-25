import React from "react"
import "./dice.css"

export default function Dice(props){
    return(
        //add the property of click in Dice into div's onclick event
        <div className="dice" onClick={()=>props.click()}>{props.dice.value}</div>
    )
}
    

    
