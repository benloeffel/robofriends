export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Lato, sans-serif",
    heading: "Roboto, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  initialColorMode: "light",
  colors: {
    text: "#2C393B",
    background: "#EDF2ED",
    primary: "#EC5B31",
    secondary: "#f25f4c",
    accent: "887C7C",
    modes: {
      dark: {
        background: "#0f0e17",
        text: "#fffffe",
        primary: "#EC5B31",
        secondary: "#f25f4c",
        accent: "#a7a9be"
      }
    }
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "text",
      fontWeight: "bold",
      transition: "all 0.25s",
      "&:hover": {
        bg: "secondary",
        color: "text",
        transition: "all 0.25s"
      }
    },
    secondary: {
      bg: "secondary",
      color: "text",
      fontWeight: "bold",
      transition: "all 0.25s",
      "&:hover": {
        bg: "accent",
        transition: "all 0.25s"
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      textAlign: "center"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
};
