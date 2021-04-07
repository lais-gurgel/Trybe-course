import React from 'react';
import pikachu from './images/pikachu.gif';

class NotFound extends React.Component {
  render() {
    return(
      <div>
        <h2>PAGE REQUEST NOT FOUND</h2>
        <img src={pikachu} alt='pikachu' />
      </div>
    )
  }
}

export default NotFound; 