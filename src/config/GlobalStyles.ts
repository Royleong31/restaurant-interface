import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px; //default
  }
  body {
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
