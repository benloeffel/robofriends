import { ThunkAction } from "redux-thunk";
import { ApplicationState, ApplicationAction } from "./types";
import { loadUsersRequest, loadUsersSuccess, loadUsersError } from "./actions";
import { apiCall } from "../api/api";

type Effect = ThunkAction<void, ApplicationState, void, ApplicationAction>;

export const loadUsers = (): Effect => (dispatch, getState) => {
  return () => {
    dispatch(loadUsersRequest());

    const request = apiCall("http://jsonplaceholder.typicode.com/users");

    return request
      .then(response => dispatch(loadUsersSuccess(response)))
      .catch(error => dispatch(loadUsersError(error)));
  };
};
