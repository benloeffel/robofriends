import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Card, Image } from "@theme-ui/components";

const CardComponent = ({ id, username, name, email }) => {
  return (
    <Card>
      <Image src={`https://robohash.org/${id}?size=200x200`} />
      <Styled.h2>{name}</Styled.h2>
      <Styled.p>{username}</Styled.p>
      <Styled.p>{email}</Styled.p>
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
