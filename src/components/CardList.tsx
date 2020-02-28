import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@theme-ui/components";
import Card from "./Card";
import { User } from "../store/types";

type Props = {
  users: Array<User>;
};

const CardList: React.FC<Props> = ({ users }) => {
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
        {users.map((user: User, idx: number) => (
          <Card
            key={idx}
            id={user.id}
            username={user.username}
            name={user.name}
            email={user.email}
          />
        ))}
      </Grid>
    </>
  );
};

CardList.propTypes = {
  users: PropTypes.array.isRequired
};

export default CardList;
