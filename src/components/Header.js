import { Styled, useColorMode } from "theme-ui";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import SearchInput from "./SearchInput";
import { Button } from "@theme-ui/components";

const Header = ({ searchTerms, searchChange }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bg: "background",
        padding: 16
      }}
    >
      <Styled.h1>RoboFriends</Styled.h1>
      <Styled.p>Search and instantly find your Robot Friends!</Styled.p>
      <SearchInput searchTerm={searchTerms} searchChange={searchChange} />
      <Button
        sx={{ position: "absolute", right: "16px" }}
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        Lights {colorMode === "default" ? "OFF" : "ON"}!
      </Button>
    </header>
  );
};

Header.propTypes = {
  searchTerms: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired
};

export default Header;
