/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { Button } from "@theme-ui/components";

const ButtonDarkMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      sx={{ position: "absolute", right: "16px" }}
      onClick={e => {
        setColorMode(colorMode === "dark" ? "default" : "dark");
      }}
    >
      Lights {colorMode === "dark" ? "ON" : "OFF"}!
    </Button>
  );
};

export default ButtonDarkMode;
