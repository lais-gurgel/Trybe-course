import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        Users
        <br/>
        {!users ? 'Nenhum cliente cadastrado' : users.user}
        <br/>
        <button onClick={() => {}}><Link to="/register">Register now</Link></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.loginReducer.usersData
  }
}

export default connect(mapStateToProps)(Users);