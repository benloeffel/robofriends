import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchTerm, requestUsers } from "../actions";
import MainPage from "../components/MainPage";

const mapStateToProps = state => {
  return {
    searchTerm: state.searchUsers.searchTerm,
    users: state.requestUsers.users,
    isLoading: state.requestUsers.isLoading,
    error: state.requestUsers.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchTerm(event.target.value)),
    onRequestUsers: () => dispatch(requestUsers())
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
