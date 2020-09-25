import React from "react"
import "./dice.css"

export default function Dice(props){
    //add different class in css to show the dice locked or not
    if(props.dice.locked){
    return(
        //add the property of click in Dice into div's onclick event
        <div className="dice locked" onClick={()=>props.click()}>{props.dice.value}</div>
    );
    }else{
        return(
            <div className="dice" onClick={()=>props.click()}>{props.dice.value}</div>
        );
    }
}
    

    
