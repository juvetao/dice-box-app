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
            totalValue: 0,
            pair: false,
            tripleton: false,
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

        //when roll dice, check if the values are the same or even how many of them are the same
        this.isSame();
    }

    //lock or unlock the dice with specific index
    lock(index){
        let tempDie = this.state.die;
        tempDie[index].locked = !tempDie[index].locked;
        this.setState({
            die: tempDie
        });
    }

    //check if dice value are the same and how many of them are the same
    isSame(){
        let tempPair = false;
        let tempTripleton = false;

        //add one more layer of for loop in order to run all the dice value from 1 to 6
        for(let i =1; i<=6; i++){
            let counter = 0;

            this.state.die.forEach((dice) =>{
                if(dice.value === i){
                    counter++;
                }
            });

            if(counter === 2){
                tempPair = true;
            }else if(counter === 3){
                tempTripleton = true;
            }
            this.setState({
                pair: tempPair,
                tripleton: tempTripleton,
            });
            
        } 
        
        
    }

    render(){
        return(
            <div>
                <h1>Dicebox</h1>
                <p>Total Value: {this.state.totalValue}</p>
                <p>Pair: {this.state.pair ? "Yes": "No"}</p>
                <p>Tripleton: {this.state.tripleton ? "Yes": "No"}</p>
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