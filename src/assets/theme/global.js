import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    padding: 0px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    transition: all 0.25s linear;
  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }

  .btn {
    background: ${({ theme }) => theme.btnBackground};
    color: ${({ theme }) => theme.btnTxtColor};
  }
  .btn:hover {
    background: ${({ theme }) => theme.btnBackground};
    color: ${({ theme }) => theme.btnTxtColor};
  }

  a {
    color: ${({ theme }) => theme.text};
  }
  
  .btn-outline-default {
    color: ${({ theme }) => theme.btnColor};
    background-color: transparent !important;
    border: 2px solid ${({ theme }) => theme.btnBorder} !important
  }
  .btn-outline-default:hover,
  .btn-outline-default:focus,
  .btn-outline-default:active,
  .btn-outline-default:active:focus,
  .btn-outline-default.active {
      color: ${({ theme }) => theme.btnColor};
      background-color: transparent !important;
      border: 2px solid ${({ theme }) => theme.btnBorder} !important
  }
  .btn-outline-default:not([disabled]):not(.disabled):active,
  .btn-outline-default:not([disabled]):not(.disabled).active,
  .show>.btn-outline-default.dropdown-toggle {
      background-color: transparent !important;
      border-color: ${({ theme }) => theme.btnDefaultColor} !important;
      -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;