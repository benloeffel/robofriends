import { CHANGE_SEARCH_TERM } from "./constants";

const initialState = {
  searchTerm: ""
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.payload
      });
    default:
      return state;
  }
};

/**
 * For more information on Reducers visit the link below:
 * https://redux.js.org/basics/reducers
 */
