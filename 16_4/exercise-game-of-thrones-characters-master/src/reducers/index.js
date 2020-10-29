const INITIAL_STATE = {
  character: {}, error: '', loading: true
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SEARCH_SUCCESS':
      return { ...state, character: action.character[0], loading: false };
    case 'SEARCH_FAIL':
      return { ...state, error: action.error };
    default:
      return state;
  }
}