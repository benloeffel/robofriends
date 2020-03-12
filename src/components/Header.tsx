/** @jsx jsx */
import React, { memo } from "react";
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import ButtonDarkMode from "./ButtonDarkMode";

type Props = {
  searchTerms: string;
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
};

const Header: React.FC<Props> = ({ searchTerms, searchChange }) => {
  const Heading = memo(() => (
    <React.Fragment>
      <Styled.h1>RoboFriends</Styled.h1>
      <Styled.p>Search and instantly find your Robot Friends!</Styled.p>
    </React.Fragment>
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
