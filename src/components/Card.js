/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Card, Image } from "@theme-ui/components";

const CardComponent = ({ id, username, name, email }) => {
  return (
    <Card sx={{ bg: "background", border: "2px solid black" }}>
      <Image src={`https://robohash.org/${id}?size=200x200`} />
      <Styled.h2 sx={{ color: "primary" }}>{name}</Styled.h2>
      <Styled.p sx={{ color: "text" }}>{username}</Styled.p>
      <Styled.p sx={{ color: "text" }}>{email}</Styled.p>
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
