import React, {Component} from 'react';
import './Pokemon.css';

function uptoThree(num){
 return (num <= 999 ? ("00"+num).slice(-3) : num)
}
const img_src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokemon extends Component{
    render(){
        let img_url = `${img_src}${uptoThree(this.props.id)}.png`;
        return(
            <div className="Pokemon">
            <h1>{this.props.name}</h1>
            <img src={img_url} alt={this.props.name} height="100" />
            <h3>Type : {(this.props.type).charAt(0).toUpperCase() + (this.props.type).slice(1)}</h3>
            <h3>Experience : {this.props.exp}</h3>
            </div>
        );
    }
}

export default Pokemon;