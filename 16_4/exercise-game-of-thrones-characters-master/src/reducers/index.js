const INITIAL_STATE = {
  character: {}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SEARCH_SUCCESS':
      return { ...state, character: action.character };
    case 'SEARCH_FAIL':
      return { ...state, error: action.error };
    default:
      return state;
  }
}