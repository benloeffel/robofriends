import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchUsers } from "../store/actions";
import { loadUsers } from "../store/effects";
import { ApplicationState } from "../store/types";
import MainPage from "../components/MainPage";
import { ThunkDispatch } from "redux-thunk";

const mapStateToProps = (state: ApplicationState) => {
  return {
    searchTerm: state.searchTerm,
    users: state.users,
    isLoading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) =>
  bindActionCreators(
    {
      onSearchChange: event => dispatch(searchUsers(event.target.value)),
      onRequestUsers: () => dispatch(loadUsers())
    },
    dispatch
  );

const App = (props: any) => {
  return <MainPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
