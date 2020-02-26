import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUsers } from "../store/actions";
import { loadUsers } from "../store/effects";
import MainPage from "../components/MainPage";

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    users: state.users,
    isLoading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(searchUsers(event.target.value)),
    onRequestUsers: () => dispatch(loadUsers())
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
