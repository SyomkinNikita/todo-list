import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#FFC93F',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #205;
    color: #fff;
  }

  body, input {
    font-family: 'Roboto', sans-serif;
  }
`;
