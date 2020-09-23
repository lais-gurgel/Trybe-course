import React from 'react';
import { Link }  from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return(
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/favorites'>Favorite Pokémons</Link>
      </div>
    )
  }
}

export default Nav; 