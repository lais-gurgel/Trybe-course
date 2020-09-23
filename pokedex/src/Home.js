import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Minha homepage</h1>
        <Link to='/about'>About </Link>
        <br />
        <Link to='/users'>Users</Link>
        <br />
        <Link to='/profile'>Profile</Link>
        <br />
        <Link to='/strict-access'>Strict Access</Link>
    </div>
    )
  }
}

export default Home