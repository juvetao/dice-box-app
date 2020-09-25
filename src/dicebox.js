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
            ],
            totalValue: 0
        }
    };

    //To continue the previous state of dice before update
    componentDidMount(){
        this.roll();
    }

    //roll in order to get random value between 1 and 6 (supposed the dice is not locked)
    roll(){
        let tempDie = this.state.die;

        //add a temp total to calcluate the total value of dice
        let total = 0;

        tempDie.forEach((dice)=>{
            if(!dice.locked){
                dice.value = Math.ceil(Math.random()*6);
            }
            //put the accumulate in this for-loop
            total += dice.value;
        });
        this.setState({
            die: tempDie,
            //update the total value 
            totalValue: total,
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
                <p>totalValue: {this.state.totalValue}</p>
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