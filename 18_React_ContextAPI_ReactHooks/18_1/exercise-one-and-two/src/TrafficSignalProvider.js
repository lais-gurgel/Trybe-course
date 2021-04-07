import React from 'react';
import TrafficSignalContext from './TrafficSignalContext';

class TrafficSignalProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      signal: { color: 'red' },
    }
    this.handleSignal = this.handleSignal.bind(this);
  }

  handleSignal(signalColor) {
    this.setState({
      signal: { color: signalColor },
    })
  }

  render() {
    const { children } = this.props;
    return (
      <TrafficSignalContext.Provider value={{ ...this.state, changeSignal: this.handleSignal }}>
        {children}
      </TrafficSignalContext.Provider>
    )
  }
}

export default TrafficSignalProvider;
