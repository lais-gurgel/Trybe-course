import React from 'react'
import PropTypes from 'prop-types'
import pokemons from './data'
import Pokemon from './Pokemon'


class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1>POKEDEX</h1>
        {pokemons.map((pokemon) =>{
          return <Pokemon 
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          averageWeightValue={pokemon.averageWeight.value}
          averageWeightMeasurementUnit={pokemon.averageWeight.measurementUnit}
          image={pokemon.image}
          />
        })}
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
}

export default Pokedex