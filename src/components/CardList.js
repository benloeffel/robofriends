import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Grid } from "@theme-ui/components";
import Card from "../components/Card";

const CardList = ({ robots }) => {
  return (
    <>
      {console.log(robots)}
      {robots.length ? (
        <Grid gap={2} columns={[2, null, 5]}>
          {robots.map((robot, idx) => (
            <Card
              key={idx}
              id={robot.id}
              username={robot.username}
              name={robot.name}
              email={robot.email}
            />
          ))}
        </Grid>
      ) : (
        <Styled.p>Sorry, we couldn't find your Robot!</Styled.p>
      )}
    </>
  );
};

CardList.propTypes = {
  robots: PropTypes.array.isRequired
};

export default CardList;
