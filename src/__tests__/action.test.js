import React from "react";
import { apiCall } from "../api/api";
import "../setupTests";
import * as actions from "../actions";
import * as types from "../constants";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const mockStore = configureStore([thunk]);

describe("Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create an action to setSearchTerm", () => {
    const text = "test";
    const expectedAction = {
      type: types.CHANGE_SEARCH_TERM,
      payload: text
    };

    expect(actions.setSearchTerm(text)).toEqual(expectedAction);
  });

  it("should create an action to requestUsers", () => {
    const store = mockStore({});
    store.dispatch(actions.requestUsers());
    const action = store.getActions();

    const expectedAction = {
      type: types.REQUEST_USERS_PENDING
    };

    expect(action[0]).toEqual(expectedAction);
  });

  it("should create an action REQUEST_USERS_SUCCESS when fetching todos has been done", () => {
    fetchMock
      .getOnce("http://jsonplaceholder.typicode.com/users", {
        users: [
          {
            id: 1,
            name: "John Doe",
            username: "johndoe",
            email: "john@doe.com"
          }
        ]
      })
      .catch(unmatchedUrl => {
        return apiCall(unmatchedUrl);
      });

    const expectedActions = [
      { type: types.REQUEST_USERS_PENDING },
      {
        type: types.REQUEST_USERS_SUCCESS,
        payload: {
          users: [
            {
              id: 1,
              name: "John Doe",
              username: "johndoe",
              email: "john@doe.com"
            }
          ]
        }
      }
    ];

    const store = mockStore({ users: [] });

    return store.dispatch(actions.requestUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action REQUEST_USERS_FAILED when fetching todos has failed", () => {
    fetchMock
      .mock("http://jsonplaceholder.typicode.com/users", {
        throws: new TypeError("Failed to fetch")
      })
      .catch(unmatchedUrl => {
        return apiCall(unmatchedUrl);
      });

    const expectedActions = [
      { type: types.REQUEST_USERS_PENDING },
      {
        type: types.REQUEST_USERS_FAILED,
        payload: TypeError("Failed to fetch")
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.requestUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
