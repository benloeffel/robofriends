import { Styled } from "theme-ui";
/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = () => {
  return (
    <header sx={{ textAlign: "center" }}>
      <Styled.h1>RoboFriends</Styled.h1>
      <Styled.p>Search and instantly find your Robot Friends!</Styled.p>
    </header>
  );
};

export default Header;
