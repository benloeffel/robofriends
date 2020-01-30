import React, { memo } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import SearchInput from "./SearchInput";
import ButtonDarkMode from "./ButtonDarkMode";

const Header = ({ searchTerms, searchChange }) => {
  const Heading = memo(() => (
    <>
      <Styled.h1>RoboFriends</Styled.h1>
      <Styled.p>Search and instantly find your Robot Friends!</Styled.p>
    </>
  ));

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
      <Heading />
      <SearchInput searchTerm={searchTerms} searchChange={searchChange} />
      <ButtonDarkMode />
    </header>
  );
};

Header.propTypes = {
  searchTerms: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired
};

export default Header;
