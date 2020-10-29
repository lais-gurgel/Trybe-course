import fetchChar from '../services/charAPI';

export const success = (character) => ({
  type: 'SEARCH_SUCCESS',
  character
});

export const fail = (error) => ({
  type: 'SEARCH_FAIL',
  error
});

export const fetchCharacter = (name) => {
  return (dispatch) => {
    fetchChar(name)
      .then((characterSearch) => dispatch(success(characterSearch)))
      .catch((errorAPI) => dispatch(fail(errorAPI)))
  }
}