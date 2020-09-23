import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    const { complement } = this.props.match.params
    return (
      <div>
        <h1>Welcome {this.props.name}, you are {complement}!</h1>
        <Link to='/'>Return to Home</Link>
      </div>
    )
  }
}

export default Profile