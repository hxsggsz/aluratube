import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
      width: 100vw;
  }
  /* NextJS */
  html {
    display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    overflow-x: hidden;
  }
  body {
    display: flex;
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }
  #__next {
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;
