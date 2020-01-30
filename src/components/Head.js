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

      {/* PWA */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ec5b31" />
      <meta name="msapplication-TileColor" content="#ec5b31" />
      <meta name="theme-color" content="#ec5b31"></meta>

      <title>RoboFriends</title>
    </Helmet>
  );
};

export default Head;
