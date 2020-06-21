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


  .md-form.md-bg input[type="text"],
  .md-form.md-bg input[type="password"],
  .md-form.md-bg input[type="email"],
  .md-form.md-bg input[type="url"],
  .md-form.md-bg input[type="time"],
  .md-form.md-bg input[type="date"],
  .md-form.md-bg input[type="datetime-local"],
  .md-form.md-bg input[type="tel"],
  .md-form.md-bg input[type="number"],
  .md-form.md-bg input[type="search-md"],
  .md-form.md-bg input[type="search"],
  .md-form.md-bg textarea.md-textarea {
      color: ${({ theme }) => theme.inputTxt} ;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 10px 5px;
      background: ${({ theme }) => theme.inputBg}  no-repeat;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#4285f4), to(#4285f4)), -webkit-gradient(linear, left top, left bottom, from(#ced4da), to(#ced4da));
      background-image: linear-gradient(to bottom, #4285f4, #4285f4), linear-gradient(to bottom, #ced4da, #ced4da);
      background-position: 50% 100%, 50% 100%;
      background-size: 0 2px, 100% 1px;
      border: 0;
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;
      -webkit-transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
      transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  }
  .md-form.md-bg input[type="text"]:focus,
  .md-form.md-bg input[type="password"]:focus,
  .md-form.md-bg input[type="email"]:focus,
  .md-form.md-bg input[type="url"]:focus,
  .md-form.md-bg input[type="time"]:focus,
  .md-form.md-bg input[type="date"]:focus,
  .md-form.md-bg input[type="datetime-local"]:focus,
  .md-form.md-bg input[type="tel"]:focus,
  .md-form.md-bg input[type="number"]:focus,
  .md-form.md-bg input[type="search-md"]:focus,
  .md-form.md-bg input[type="search"]:focus,
  .md-form.md-bg textarea.md-textarea:focus {
      background-color: ${({ theme }) => theme.inputBgFocus};
      background-size: 100% 2px, 100% 1px;
      outline: none;
      color: ${({ theme }) => theme.inputColor};
  }

.md-form .input-prefix {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
    color: ${({ theme }) => theme.inputIconColor};
    pointer-events: none
}

.md-form .input-prefix.active {
  color: ${({ theme }) => theme.inputIconColorActive};
}

.md-form input:not([type]):focus:not([readonly])+label,
.md-form input[type="text"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="password"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="email"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="url"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="time"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="date"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="datetime"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="datetime-local"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="tel"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="number"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="search"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="phone"]:not(.browser-default):focus:not([readonly])+label,
.md-form input[type="search-md"]:focus:not([readonly])+label,
.md-form textarea.md-textarea:focus:not([readonly])+label {
    color: ${({ theme }) => theme.inputLabelColor}
}

.md-form label.active {
  color: ${({ theme }) => theme.inputTxt};

  -webkit-transform: translateY(-14px) scale(0.8);
  transform: translateY(-14px) scale(0.8)
}
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;