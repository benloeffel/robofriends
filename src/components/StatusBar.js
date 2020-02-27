/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import PropTypes from "prop-types";

const StatusBar = ({ loading, error, resultLength }) => {
  return (
    <Box sx={{ bg: "text", padding: "16px", textAlign: "center" }}>
      <Styled.p sx={{ color: "background" }}>
        {loading ? (
          <>
            Please wait while we're trying to load your data.
            <span role="img" aria-label="Loading">
              ⏳
            </span>
          </>
        ) : error.status ? (
          <>
            Oh no! We've encountered an error!
            <span role="img" aria-label="Screaming">
              😱
            </span>
          </>
        ) : resultLength > 0 ? (
          <>
            We have found {resultLength} robots matching your search.{" "}
            <span role="img" aria-label="Robot">
              🤖
            </span>
          </>
        ) : (
          <>
            Sorry, we could not find any robots matching your search.
            <span role="img" aria-label="Sad">
              🙁
            </span>
          </>
        )}
      </Styled.p>
    </Box>
  );
};

StatusBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  resultLength: PropTypes.number.isRequired
};

export default StatusBar;
