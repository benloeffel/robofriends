import React, { useState, useEffect } from "react";
import { ThemeProvider, Styled } from "theme-ui";
import theme from "../utils/theme";
import { robots } from "../robots";

import { Grid } from "@theme-ui/components";

import Header from "../components/Header";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(searchTerm);

  const handleChange = e => {
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
      <Header />
      <SearchInput searchTerm={searchTerm} searchChange={handleChange} />
      <Styled.p>{searchResults.length} Robots found.</Styled.p>

      {searchResults.length ? (
        <Grid gap={2} columns={[2, null, 5]}>
          {searchResults.map(robot => (
            <Card
              key={robot.id}
              username={robot.username}
              name={robot.name}
              email={robot.email}
            />
          ))}
        </Grid>
      ) : (
        <Styled.p>Sorry, we couldn't find your Robot!</Styled.p>
      )}
    </ThemeProvider>
  );
}

export default App;
