import {
  CHANGE_SEARCH_TERM,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED
} from "./constants";

const initialStateSearch = {
  searchTerm: ""
};

export const searchUsers = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.payload
      });
    default:
      return state;
  }
};

const initialStateUsers = {
  isLoading: false,
  users: [],
  error: {}
};

export const requestUsers = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, { isLoading: true });
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.payload,
        isLoading: false
      });
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false
      });
    default:
      return state;
  }
};

/**
 * For more information on Reducers visit the link below:
 * https://redux.js.org/basics/reducers
 */
