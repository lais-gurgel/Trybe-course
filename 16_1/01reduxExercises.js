// Redux: Define an Action Creator
// Define a function named actionCreator() that returns the action object when called.
const action = {  type: 'LOGIN' }
// Define an action creator here:
const actionCreator = () => {  return action }

// Redux: Dispatch an Action Event
// The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().
const store = Redux.createStore(
  (state = {login: false}) => state
);
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
// Dispatch the action here:
store.dispatch(loginAction());
store.dispatch({ type: 'LOGIN'});

// Redux: Handle an Action in the Store
// The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
const defaultState = {
  login: false
};
const reducer = (state = defaultState, action) => {
  // Change code below this line
  if(action.type === 'LOGIN') {
    return {
      login: true
    }
  }
  return state;
  // Change code above this line
};
const store = Redux.createStore(reducer);
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Redux: Use a Switch Statement to Handle Multiple Actions
// The code editor has a store, actions, and action creators set up for you. Fill in the reducer function to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over action.type and return the appropriate authentication state.
// Note: At this point, don't worry about state immutability, since it is small and simple in this example. For each action, you can return a new object — for example, {authenticated: true}. Also, don't forget to write a default case in your switch statement that returns the current state. This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer. In such a case, you want to make sure that you return the current state.
const defaultState = {
  authenticated: false
};
const authReducer = (state = defaultState, action) => {
  // Change code below this line
switch(action.type) {
  case 'LOGIN':
  return { authenticated: true };
  default:
  return defaultState;
}
  // Change code above this line
};
const store = Redux.createStore(authReducer);
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};
const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

// Redux: Use const for Action Types
// Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.
// Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.
// Change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// Change code above this line
const defaultState = {
  authenticated: false
};
const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;
  }
};
const store = Redux.createStore(authReducer);
const loginUser = () => {
  return {
    type: LOGIN
  }
};
const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

// Redux: Register a Store Listener
// Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method. You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.
const ADD = 'ADD';
const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};
const store = Redux.createStore(reducer);
// Global count variable:
let count = 0;
// Change code below this line
const addOne = () => (count += 1);
store.subscribe(addOne);
// Change code above this line
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// Redux: Combine Multiple Reducers
// There are counterReducer() and authReducer() functions provided in the code editor, along with a Redux store. Finish writing the rootReducer() function using the Redux.combineReducers() method. Assign counterReducer to a key called count and authReducer to a key called auth.
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
})// Define the root reducer here
const store = Redux.createStore(rootReducer);

// Redux: Send Action Data to the Store
// There's a basic notesReducer() and an addNoteText() action creator defined in the code editor. Finish the body of the addNoteText() function so that it returns an action object. The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.
// Next, finish writing the switch statement in the notesReducer(). You need to add a case that handles the addNoteText() actions. This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.
// The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store state.
const ADD_NOTE = 'ADD_NOTE';
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
  case ADD_NOTE:
    return action.text;
    // Change code above this line
    default:
      return state;
  }
};
const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note,
  }
  // Change code above this line
};
const store = Redux.createStore(notesReducer);
console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

// Redux: Write a Counter with Redux
// In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types
const counterReducer = ( state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
        return state + 1;
        case DECREMENT:
        return state - 1;
        default: 
        return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives
const incAction = () => {
    return {
        type: INCREMENT,
    }
}; // Define an action creator for incrementing
const decAction = () => {
    return {
        type: DECREMENT,
    }
}; // Define an action creator for decrementing
const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

// Redux: Never Mutate State
// There is a store and reducer in the code editor for managing to-do items. Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state. There are a few ways to accomplish this with standard JavaScript or ES6. See if you can find a way to return a new array with the item from action.todo appended to the end.
const ADD_TO_DO = 'ADD_TO_DO';
// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo];
      // return state.concat(action.todo);
      // return state.filter((el, index) => index !== action.index)
    default:
      return state;
  }
};
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}
const store = Redux.createStore(immutableReducer);

// Redux: Use the Spread Operator on Arrays
// Use the spread operator to return a new copy of state when a to-do is added.
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};
const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}
const store = Redux.createStore(immutableReducer);

// Redux: Remove an Item from an Array
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      // don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    // or return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};
const removeItem = index => {
  return {
    type: "REMOVE_ITEM",
    index
  };
};
const store = Redux.createStore(immutableReducer);

// Redux: Copy an Object with Object.assign
// The Redux state and actions were modified to handle an object for the state. Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online. Try to use Object.assign() to complete the challenge.
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};
const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: 'online'});
    default:
      return state;
  }
};
const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};
const store = Redux.createStore(immutableReducer);
