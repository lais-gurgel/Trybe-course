import React, { Component } from 'react';
import Grandmother from './Grandmother';

class GreatGrandmother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => (
      { inheritance: prevState.inheritance - 1000 }
    ));
  }

  render() {
    return (
      <div>
        <h1>Eu sou a bisavó</h1>
        <Grandmother
        inheritance={this.state.inheritance}
        spendInheritance={this.spendInheritance}
       />
      </div>
    );
  }
}

export default GreatGrandmother;
