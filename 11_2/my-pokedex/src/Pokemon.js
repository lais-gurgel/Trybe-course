import React from 'react'
import PropTypes from 'prop-types'


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeightValue, averageWeightMeasurementUnit, image } = this.props

    return (
      <div className='pokemon-card'>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>Average weight: {averageWeightValue} {averageWeightMeasurementUnit}</p>
        <img src={image} alt={name}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeightValue: PropTypes.number, 
  averageWeightMeasurementUnit: PropTypes.string, 
  image: PropTypes.string
}

export default Pokemon