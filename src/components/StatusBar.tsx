/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import PropTypes from "prop-types";

type Props = {
  loading: boolean;
  error: Error;
  resultLength: number;
};

const StatusBar: React.FC<Props> = ({ loading, error, resultLength }) => {
  return (
    <Box sx={{ bg: "text", padding: "16px", textAlign: "center" }}>
      <Styled.p sx={{ color: "background" }}>
        {loading ? (
          <React.Fragment>
            Please wait while we're trying to load your data.
            <span role="img" aria-label="Loading">
              ⏳
            </span>
          </React.Fragment>
        ) : error.name ? (
          <React.Fragment>
            Oh no we've encountered {error.name}: {error.message}
            <span role="img" aria-label="Screaming">
              😱
            </span>
          </React.Fragment>
        ) : resultLength > 0 ? (
          <React.Fragment>
            We have found {resultLength} robots matching your search.{" "}
            <span role="img" aria-label="Robot">
              🤖
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            Sorry, we could not find any robots matching your search.
            <span role="img" aria-label="Sad">
              🙁
            </span>
          </React.Fragment>
        )}
      </Styled.p>
    </Box>
  );
};

StatusBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
  resultLength: PropTypes.number.isRequired
};

export default StatusBar;
