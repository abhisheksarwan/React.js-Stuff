import React, { Component } from 'react';
import Pokemon from './pokemon';
import './pokedex.css';

class Pokedex extends Component{
    render(){
        let color = this.props.isWinner ? "green" : "red";
        return(
            <div className="Pokedex">
            <h1 style={{textAlign:"center"}}>Pokedex</h1>
            <h2 style={{textAlign:"center"}}>Total : {this.props.totalExp} </h2>
            <h3 style={{textAlign:"center", color:color}}>
            {this.props.isWinner ? "WINNER!" : "LOSER!"}
            </h3>
            <div className="Pokedex-cards">
            {this.props.pokedata.map((p) => (<Pokemon id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>))}
            </div>
            </div>
        );
    }
}

export default Pokedex;