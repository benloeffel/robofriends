import React, { useEffect } from "react";

import Head from "../components/Head";
import Header from "../components/Header";
import CardList from "../components/CardList";
import StatusBar from "../components/StatusBar";

const MainPage = ({
  searchTerm,
  users,
  isLoading,
  error,
  onSearchChange,
  onRequestUsers
}) => {
  useEffect(() => {
    onRequestUsers();
  }, [onRequestUsers]);

  const filterUsers = users => {
    return users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  return (
    <div>
      <Head />
      <Header searchTerms={searchTerm} searchChange={onSearchChange} />
      {console.log()}
      <StatusBar
        loading={isLoading}
        error={error}
        resultLength={filterUsers(users).length}
      />
      {filterUsers ? <CardList users={filterUsers(users)} /> : null}
    </div>
  );
};

export default MainPage;
