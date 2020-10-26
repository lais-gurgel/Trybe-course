// Actions
const INCREMENT = { type: 'INCREMENT' };
const DECREMENT = { type: 'DECREMENT' };

// Reducer (Counter)
const reducer = ( state = { counter: 0 }, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 }
    case 'DECREMENT':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

// Store
const store = Redux.createStore(reducer);

// Logger
function log() {
  console.log('Contador: ', store.getState().counter)
}