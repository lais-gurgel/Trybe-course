const INITIAL_STATE = {
  userLogin: {},
  usersData: {user:'Lais'},
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, userLogin: action.user };
    case 'ADD_USER':
      return { ...state, usersData: action.user };
    default:
      return state;
  }
}

export default loginReducer;