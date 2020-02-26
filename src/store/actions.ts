/**
 * Our actions file simply does one job, to map our action types to runtime javascript.
 */

import {
  User,
  SearchUsers,
  LoadUsersRequest,
  LoadUsersSuccess,
  LoadUsersError
} from "./types";

export const searchUsers = (text: Text): SearchUsers => ({
  type: "CHANGE_SEARCH_TERM",
  payload: text
});

export const loadUsersRequest = (): LoadUsersRequest => ({
  type: "REQUEST_USERS_PENDING"
});

export const loadUsersSuccess = (users: User[]): LoadUsersSuccess => ({
  type: "REQUEST_USERS_SUCCESS",
  payload: users
});

export const loadUsersError = (): LoadUsersError => ({
  type: "REQUEST_USERS_FAILED",
  payload: new Error()
});

/**
 * For more information on Actions visit the link below:
 * https://redux.js.org/basics/actions
 */
