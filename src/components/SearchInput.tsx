/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Label, Input } from "@theme-ui/components";
import PropTypes from "prop-types";

type Props = {
  searchTerm: string;
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
};

const SearchInput: React.FC<Props> = ({ searchTerm, searchChange }) => {
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
