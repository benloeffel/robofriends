import React, { useState, useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";
import { robots } from "../robots";
import Header from "../components/Header";
import CardList from "../components/CardList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([searchTerm]);

  const onSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
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
