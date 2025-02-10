import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --background-color: #031626;
    --primary-light: #05c7f2;
    --primary-dark: #049dd9;
    --highlight-light: #f18df2;
    --highlight-dark: #582259;
    --color-expense: #F5365C;
    --color-income: #2DCE89;
  }

  body {
    margin: 0;
    font-family: system-ui;
    color: var(--primary-light)
  }
`;
