import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    background-color: #1A202C;

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }

  body,
  p {
    margin: 0;
  }

  select {
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  input,
  select {
    font-family: inherit;
  }
`;
