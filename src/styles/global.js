import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('http://fonts.googleapi.com/css?family=Roboto:100,300,400,500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #1c1c1c;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

`;
