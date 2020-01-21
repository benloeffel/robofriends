import React, { useState, useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";
import Header from "../components/Header";
import CardList from "../components/CardList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      const results = data.filter(robot => {
        return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setSearchResults(results);
    }

    getUsers();
  }, [searchTerm]);

  return (
    <ThemeProvider theme={theme}>
      <Header
        searchTerms={searchTerm}
        searchChange={onSearchChange}
        resultLength={searchResults.length}
      />
      <CardList robots={searchResults} />
    </ThemeProvider>
  );
}

export default App;
