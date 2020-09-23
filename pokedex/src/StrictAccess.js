import React from 'react';
import { Link } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <h1>Welcome {user.name}, your ID is {user.id}!</h1>
        <Link to='/'>Return to Home</Link>
      </div>
    )
  }
}

export default StrictAccess