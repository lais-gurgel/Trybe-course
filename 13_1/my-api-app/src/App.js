import React from 'react';
import './App.css';
import CounterDisplay from './CounterDisplay';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    }
      console.log("construtor");
  }
  
  componentDidMount() {
    this.setState({
      counter: 10
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state)
    console.log('shouldComponentUpdate')
    if(this.state.counter === 12) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
      </div>
    );
  }
}

export default App;
