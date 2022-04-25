import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --font-base: "DM Sans", sans-serif;
  --primary-color: #edf2f8;
  --secondary-color: #313bac;
  --black-color: #030303;
  --lightGray-color: #e4e4e4;
  --gray-color: #6b7688;
  --brown-color: #46364a;
  --white-color: #ffffff;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
body {
  font-family: var(--font-base);
}
`