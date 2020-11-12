import React, { Component } from 'react';
import Grandmother from './Grandmother';
import MyContext from './MyContext';

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
    const contextValue = {
      money: this.state.inheritance,
      spendMoney: this.spendInheritance,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>I am the great grandmother</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    );
  }
}

export default GreatGrandmother;
