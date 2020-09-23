import React from 'react';

class PokemonDetails extends React.Component {
  render() {
    let { pokemondId } = this.props.match.params;
    return(
      <div>
        <h2>POKEMON Details {`${pokemondId}`}</h2>
        <p>INSERIR CARD</p>

        <h2>Summary</h2>

        <h2>Game Locations of POKEMON</h2>

        <label>Favorite pokemon?
          <input type='checkbox'/>
        </label>
      </div>
    )
  }
}

export default PokemonDetails; 