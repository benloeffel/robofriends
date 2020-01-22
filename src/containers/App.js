import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setSearchTerm, requestUsers } from "../actions";

import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";
import Header from "../components/Header";
import CardList from "../components/CardList";
import StatusBar from "../components/StatusBar";
import ErrorBoundary from "../components/ErrorBoundary";

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

function App({
  searchTerm,
  users,
  isLoading,
  error,
  onSearchChange,
  onRequestUsers
}) {
  useEffect(() => {
    onRequestUsers();
  }, [onRequestUsers]);

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Header searchTerms={searchTerm} searchChange={onSearchChange} />
        <StatusBar
          loading={isLoading}
          error={error}
          resultLength={filteredUsers.length}
        />
        {filteredUsers.length > 0 ? <CardList users={filteredUsers} /> : null}
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
