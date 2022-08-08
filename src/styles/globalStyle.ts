import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  *:focus {
    outline: none;
  }

`;
