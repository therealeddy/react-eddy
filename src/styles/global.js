import { createGlobalStyle } from 'styled-components';

import './bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    width: 100%;
    min-height: 100%;
  }

  #root {
    display: block;
    width: 100%;
    min-height: 100%;
  }

  button {
    cursor: pointer;
    outline: none !important;
  }

`;
