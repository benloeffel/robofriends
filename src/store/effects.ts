import { ThunkAction } from "redux-thunk";
import { ApplicationState, ApplicationAction } from "./types";
import { loadUsersRequest, loadUsersSuccess, loadUsersError } from "./actions";
import { apiCall } from "../api/api";

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadUsers = (): Effect => (dispatch, getState) => {
  dispatch(loadUsersRequest());
  return apiCall("http://jsonplaceholder.typicode.com/users")
    .then(data => {
      dispatch(loadUsersSuccess(data));
    })
    .catch(() => loadUsersError());
};
