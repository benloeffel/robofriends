import React, { useState, useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";
import Header from "../components/Header";
import CardList from "../components/CardList";
import StatusBar from "../components/StatusBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    async function getUsers() {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        const results = data.filter(robot => {
          return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setSearchResults(results);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }

    getUsers();
  }, [searchTerm]);

  return (
    <ThemeProvider theme={theme}>
      <Header searchTerms={searchTerm} searchChange={onSearchChange} />

      <StatusBar
        loading={loading}
        error={error}
        resultLength={searchResults.length}
      />

      {searchResults.length > 0 ? <CardList robots={searchResults} /> : null}
    </ThemeProvider>
  );
}

export default App;
