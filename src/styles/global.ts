import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, span {
  font-family: 'Ubuntu', sans-serif;
}

body, html {
  min-height: 100vh;
  background: var(--background);
}

body::-webkit-scrollbar { 
  width: 6px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.2)
}

body::-webkit-scrollbar-thumb {
  background-color: #09071B;
}

@media (max-wdith: 1080px) {
  html{
      font-size: 62.5%; /*10px*/
  }
}

@media (max-width: 720px){
  html{
      font-size: 56.5%; /*9px*/
  }
}

:root{ 
  --background: linear-gradient(to bottom, #000, #00030f);
  --filter-background: rgba(255, 255, 255, 0.25);
  --primary: #6C80EA;
  --secondary: #A7A5EC;
}

`;

export default GlobalStyle;