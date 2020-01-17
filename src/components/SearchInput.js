import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input } from "@theme-ui/components";

const SearchInput = ({ searchTerm, searchChange }) => {
  return (
    <Input
      sx={{ mb: 3, maxWidth: 250 }}
      placeholder="Enter Robot Name"
      value={searchTerm}
      onChange={searchChange}
    />
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired
};

export default SearchInput;
