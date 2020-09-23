import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <Link to='/'>Return to Home</Link>
      </div>
    )
  }
}

export default Users