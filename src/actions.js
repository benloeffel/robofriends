import { CHANGE_SEARCH_TERM } from "./constants";

export const setSearchTerm = text => ({
  type: CHANGE_SEARCH_TERM,
  payload: text
});

/**
 * For more information on Actions visit the link below:
 * https://redux.js.org/basics/actions
 */
