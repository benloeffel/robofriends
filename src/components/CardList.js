import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Grid, Box } from "@theme-ui/components";
import Card from "../components/Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.length ? (
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
      ) : (
        <Box sx={{ bg: "secondary", padding: "16px", textAlign: "center" }}>
          <Styled.p>Sorry, we couldn't find your Robot!</Styled.p>
        </Box>
      )}
    </>
  );
};

CardList.propTypes = {
  robots: PropTypes.array.isRequired
};

export default CardList;
