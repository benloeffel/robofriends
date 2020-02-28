/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import PropTypes, { InferProps } from "prop-types";

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

const userPropTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    name: PropTypes.string,
    message: PropTypes.string
  }).isRequired,
  resultLength: PropTypes.number.isRequired
};

const userDefaultProps = {};

type InferPropTypes<
  PropTypes,
  DefaultProps = {},
  Props = InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key];
};

type Props = InferPropTypes<typeof userPropTypes, typeof userDefaultProps>;

export default StatusBar;
