/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { Card, Image } from "@theme-ui/components";
import PropTypes from "prop-types";

const CardComponent = ({ id, username, name, email }) => {
  return (
    <Card sx={{ bg: "background", border: "2px solid black" }}>
      <Image
        src={`https://robohash.org/${id}?size=200x200`}
        alt={`Robot ${id}`}
      />
      <Styled.h2 className="name" sx={{ color: "primary" }}>
        {name}
      </Styled.h2>
      <Styled.p className="username" sx={{ color: "text" }}>
        {username}
      </Styled.p>
      <Styled.p className="email" sx={{ color: "text" }}>
        {email}
      </Styled.p>
    </Card>
  );
};

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default CardComponent;
