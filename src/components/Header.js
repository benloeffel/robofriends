import { Styled } from "theme-ui";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import SearchInput from "./SearchInput";

const Header = ({ searchTerms, searchChange, resultLength }) => {
  return (
    <header
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Styled.h1>RoboFriends</Styled.h1>
      <Styled.p>Search and instantly find your Robot Friends!</Styled.p>
      <SearchInput searchTerm={searchTerms} searchChange={searchChange} />
      <Styled.p>{resultLength} Robots found.</Styled.p>
    </header>
  );
};

Header.propTypes = {
  searchTerms: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
  resultLength: PropTypes.number.isRequired
};

export default Header;
