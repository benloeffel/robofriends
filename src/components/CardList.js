import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@theme-ui/components";
import Card from "../components/Card";

const CardList = ({ robots }) => {
  return (
    <>
      <Grid
        gap={3}
        columns={[2, null, 5]}
        sx={{
          bg: "text",
          padding: 16
        }}
      >
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
    </>
  );
};

CardList.propTypes = {
  robots: PropTypes.array.isRequired
};

export default CardList;
