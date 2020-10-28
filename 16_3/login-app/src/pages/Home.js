import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        HOME
        <br/>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;