import React from 'react';
import { Link }  from 'react-router-dom';
import pokedex from './images/pokedex_logo.png';

class Nav extends React.Component {
  render() {
    return(
      <div>
        <img src={pokedex} alt='pokedex-logo' />
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/favorites'>Favorite Pokémons</Link>
        </div>
      </div>
    )
  }
}

export default Nav; 