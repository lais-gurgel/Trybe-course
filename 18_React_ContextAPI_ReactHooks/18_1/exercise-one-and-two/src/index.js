import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import CarsProvider from './CarsProvider';
import TrafficSignalProvider from './TrafficSignalProvider';

ReactDOM.render(
  <TrafficSignalProvider>
    <CarsProvider>
      <App />
    </CarsProvider>
  </TrafficSignalProvider>
  ,
  document.getElementById('root'),
);
