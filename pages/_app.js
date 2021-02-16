import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const theme = {
  bg: {
    workspace: "#8bb0b5",
    desk: "#ac8968",
    laptop: "#141210",
    keys: "#888888",
    portrait: "#222224",
  },
  border: {
    desk: "#624e3c",
    laptop: "#141210",
    portrait: "#222224",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
