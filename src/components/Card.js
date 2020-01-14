import React from "react";
import { Styled } from "theme-ui";
import { Card, Image } from "@theme-ui/components";

const CardComponent = ({ username, name, email }) => {
  return (
    <Card>
      <Image src={`https://robohash.org/${username}?size=200x200`} />
      <Styled.h2>{name}</Styled.h2>
      <Styled.p>{email}</Styled.p>
    </Card>
  );
};

export default CardComponent;
