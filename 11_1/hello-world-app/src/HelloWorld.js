import React from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  render() {
    return (<div>
      <h1>{this.props.greeting}</h1>
      <h2>{this.props.name}</h2>
      <p>{this.props.message}</p>
    </div>)
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string
}

export default HelloWorld;