import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const theme = {
  bg: {
    workspace: "#8bb0b5",
    desk: "#ac8968",
    screen: "#141210",
  },
  border: {
    desk: "#624e3c",
    screen: "#141210",
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