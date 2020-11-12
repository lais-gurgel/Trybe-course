import React from 'react';
import CarsContext from './MyContext';

class CarsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.handleMoveCar = this.handleMoveCar.bind(this);
  }

  handleMoveCar(car, side) {
    this.setState({
      cars: { ...this.state.cars, [car]: side },
    })
  }

  render() {
    const { children } = this.props;
    return (
      <CarsContext.Provider value={{ ...this.state, moveCar: this.handleMoveCar }}>
        {children}
      </CarsContext.Provider>
    )
  }
}

export default CarsProvider;
