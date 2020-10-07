import React from 'react';
import pokedex from './images/pokedex.png'

class About extends React.Component {
  render() {
    return(
      <div>
        <h1>About</h1>
        <p>This application simulates a Pokedex, a digital enciclopedia containing all Pokemons</p>
        <p>One can filter Pokemons by type, and see more details for each one of them</p>
        <br/>
        <img src={pokedex} alt='pokedex'/>
      </div>
    )
  }
}

export default About; 