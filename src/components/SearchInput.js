import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Label, Input } from "@theme-ui/components";

const SearchInput = ({ searchTerm, searchChange }) => {
  return (
    <div>
      <Label htmlFor="search">Search Robots</Label>
      <Input
        id="search"
        sx={{ mb: 3, maxWidth: 250, color: "text" }}
        placeholder="Enter Robot Name"
        value={searchTerm}
        onChange={searchChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired
};

export default SearchInput;
