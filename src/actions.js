import {
  CHANGE_SEARCH_TERM,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED
} from "./constants";

export const setSearchTerm = text => ({
  type: CHANGE_SEARCH_TERM,
  payload: text
});

export const requestUsers = () => dispatch => {
  dispatch({ type: REQUEST_USERS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({ type: REQUEST_USERS_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }));
};

/**
 * For more information on Actions visit the link below:
 * https://redux.js.org/basics/actions
 */
