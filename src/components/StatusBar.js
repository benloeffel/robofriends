import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Box } from "@theme-ui/components";

const StatusBar = ({ loading, error, resultLength }) => {
  return (
    <Box sx={{ bg: "secondary", padding: "16px", textAlign: "center" }}>
      {loading ? (
        <Styled.p>
          Please wait while we're trying to load your data.
          <span role="img" aria-label="Unamused">
            😒
          </span>
        </Styled.p>
      ) : error ? (
        <Styled.p>
          Oh no! We've encountered an error!
          <span role="img" aria-label="Screaming">
            😱
          </span>
        </Styled.p>
      ) : resultLength > 0 ? (
        <Styled.p>
          We have found {resultLength} robots matching your search.{" "}
          <span role="img" aria-label="Robot">
            🤖
          </span>
        </Styled.p>
      ) : (
        <Styled.p>
          Sorry, we could not find any robots matching your search.
          <span role="img" aria-label="Sad">
            🙁
          </span>
        </Styled.p>
      )}
    </Box>
  );
};

StatusBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  resultLength: PropTypes.number.isRequired
};

export default StatusBar;
