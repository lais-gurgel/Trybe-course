const INITIAL_STATE = {
  character: {}, error: {}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SEARCH_SUCCESS':
      return { ...state, character: action.character[0] };
    case 'SEARCH_FAIL':
      return { ...state, error: action.error };
    default:
      return state;
  }
}