import React from "react"
import Dice from "./dice";
import "./dicebox.css"

export default class Dicebox extends React.Component{
    constructor(){
        super();
        this.state={
            die: [
                {
                    value: null,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
            ]
        }
    };

    //roll in order to get random value between 1 and 6 (supposed the dice is not locked)
    roll(){
        let tempDie = this.state.die;
        tempDie.forEach((dice)=>{
            if(!dice.locked){
                dice.value = Math.ceil(Math.random()*6);
            }
        });
        this.setState({
            die: tempDie
        });
    }

    //lock or unlock the dice with specific index
    lock(index){
        let tempDie = this.state.die;
        tempDie[index].locked = !tempDie[index].locked;
        this.setState({
            die: tempDie
        });
    }

    render(){
        return(
            <div>
                <h1>Dicebox</h1>
                <section className="dicebox">
                    {this.state.die.map((dice, index)=>(
                        <Dice
                            key={index}
                            dice={dice}
                            //click the cell to lock or unlock the dice
                            click={()=>this.lock(index)}
                        />
                    ))}
                </section>
                <button onClick={()=>this.roll()}>Roll the dice</button>
            </div>
        )
    }

}