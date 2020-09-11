import React from 'react'
import PropTypes from 'prop-types'
import pokemons from './data'
import Pokemon from './Pokemon'


class Pokedex extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>POKEDEX</h1>
        <div className='pokedex'>
        {pokemons.map((pokemon) =>{
          return <Pokemon 
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          weightValue={pokemon.averageWeight.value}
          weightUnit={pokemon.averageWeight.measurementUnit}
          image={pokemon.image}
          />
        })}
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
}

export default Pokedex