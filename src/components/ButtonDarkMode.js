/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { Button } from "@theme-ui/components";

const ButtonDarkMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      sx={{ position: "absolute", right: "16px" }}
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      Lights {colorMode === "default" ? "OFF" : "ON"}!
    </Button>
  );
};

export default ButtonDarkMode;
