const INITIAL_STATE = {};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

handleChange({ target }) {
  const { name } = target
  const value = target.type === 'checkbox' ? target.checked : target.value

  this.setState({
    [name]: value,
  })
}


export default listReducer;