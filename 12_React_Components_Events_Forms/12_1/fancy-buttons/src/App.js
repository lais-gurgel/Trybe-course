import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))

    if (this.state.numeroDeCliques % 2 === 0) {
      console.log(this)
    }
    console.log(this.state.numeroDeCliques % 2 === 0 ? '#00ff00' : '#ff0000')
  }

  render() {
    return <div>
      <button style={{backgroundColor: this.state.numeroDeCliques % 2 === 0 ? '#00ff00' : '#ff0000'}} className="main-button" onClick={this.handleClick}>NÚMERO DE CLIQUES: {this.state.numeroDeCliques}</button>
    </div>
  }
}

export default App;
