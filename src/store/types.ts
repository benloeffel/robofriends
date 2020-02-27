/**
 * The types file should define what our application data and actions should look like.
 * It is important to note that we should put absolutely no runtime javascript in this file.
 * This is a very declarative and definitive way to have access to all of the data models for the entire app here in one file.
 */
import { Action } from "redux";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface SearchUsers extends Action {
  type: "CHANGE_SEARCH_TERM";
  payload: Text;
}

export interface LoadUsersRequest extends Action {
  type: "REQUEST_USERS_PENDING";
}

export interface LoadUsersSuccess extends Action {
  type: "REQUEST_USERS_SUCCESS";
  payload: User[];
}

export interface LoadUsersError extends Action {
  type: "REQUEST_USERS_FAILED";
}

export interface ApplicationState {
  searchTerm: string;
  loading: boolean;
  users: User[];
  error: boolean;
}

export type ApplicationAction =
  | SearchUsers
  | LoadUsersRequest
  | LoadUsersSuccess
  | LoadUsersError;
