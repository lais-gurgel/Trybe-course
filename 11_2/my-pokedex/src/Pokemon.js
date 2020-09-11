import React from 'react'
import PropTypes from 'prop-types'


class Pokemon extends React.Component {
  render() {
    const { name, type, weightValue, weightUnit, image } = this.props

    return (
      <div className='pokemon-card'>
        <div className='pokemon-info'>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>Average weight: {weightValue} {weightUnit}</p>
        </div>
        <img className='pokemon-image' src={image} alt={name}/>
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