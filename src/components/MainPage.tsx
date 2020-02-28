import React, { useEffect } from "react";

import Head from "./Head";
import Header from "./Header";
import CardList from "./CardList";
import StatusBar from "./StatusBar";

import { User } from "../store/types";

type Props = {
  searchTerm: string;
  users: Array<object>;
  isLoading: boolean;
  error: Error;
  onSearchChange: () => void;
  onRequestUsers: () => void;
};

const MainPage: React.FC<Props> = ({
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

  const filterUsers = (users: any) => {
    return users.filter((user: User) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  return (
    <div>
      <Head />
      <Header searchTerms={searchTerm} searchChange={onSearchChange} />
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
