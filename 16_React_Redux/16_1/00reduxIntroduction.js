// Redux: Create a Redux Store
// The Redux store is an object which holds and manages application state. There is a method called createStore() on the Redux object, which you use to create the Redux store. This method takes a reducer function as a required argument. The reducer function it simply takes state as an argument and returns state.
// Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.
// Note: The code in the editor uses ES6 default argument syntax to initialize this state to hold a value of 5.
const reducer = (state = 5) => {
  return state;
};
const store = Redux.createStore(reducer);

// Redux: Get State from the Redux Store
// The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the getState() method.
// const store = Redux.createStore( (state = 5) => state );
// Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.

const currentState = store.getState();

console.log(currentState);

// Redux: Define a Redux Action
// Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give it a property type set to the string 'LOGIN'.
const action = { type: 'LOGIN'}