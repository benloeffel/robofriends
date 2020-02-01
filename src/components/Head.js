import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Search through your Robot Friends" />
      <meta
        name="viewport"
        conent="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="%PUBLIC_URL%/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="%PUBLIC_URL%/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="%PUBLIC_URL%/favicon-16x16.png"
      />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link
        rel="mask-icon"
        href="%PUBLIC_URL%/safari-pinned-tab.svg"
        color="#ec5b31"
      />
      <meta name="msapplication-TileColor" content="#ec5b31" />
      <meta name="theme-color" content="#ec5b31"></meta>

      <title>RoboFriends</title>
    </Helmet>
  );
};

export default Head;
