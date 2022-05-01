import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
/* reset */
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
*, *::before, *::after {
  box-sizing: border-box;
}
/* make images easier to work with */
img, picture {
  max-width: 100%;
  display: block;
}
/* make forms easier to work with */
input, button, textarea, select {
  font: inherit;
}
/* remove animations for people who turned them off */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
h1,h2,h3,h4,h5,h6,p {
  font-weight: 400;
}
a {
  font-family: inherit;
  color: inherit;
  text-decoration: none;
  :hover {
      text-decoration: underline;
  }
}
ul {
  list-style-type: none;
}
/* end of reset */
:root {
  --font-base: "DM Sans", sans-serif;
  --primary-color: #edf2f8;
  --secondary-color: #313bac;
  --black-color: #030303;
  --lightGray-color: #e4e4e4;
  --gray-color: #6b7688;
  --brown-color: #46364a;
  --white-color: #ffffff;
  --maxWidth: 1440px;
}
body {
  font-family: var(--font-base);
}
.app {
  background-color: var(--primary-color);
  font-family: var(--font-base);
}
.container {
  max-width: var(--maxWidth);
  margin: 0 auto;
}
.app__whitebg {
  background-color: var(--white-color);
}

.app__primarybg {
  background-color: var(--primary-color);
}

.app__container {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
}

.app__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__wrapper {
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 4rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
}

.copyright {
  width: 100%;
  padding: 2rem 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    text-transform: uppercase;
    color: var(--black-color);
  }
}

.head-text {
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: var(--black-color);
  text-transform: capitalize;

  span {
    color: var(--secondary-color);
  }

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
}

.p-text {
  font-size: 0.8rem;
  text-align: left;
  color: var(--gray-color);
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
}

.bold-text {
  font-size: 1rem;
  font-weight: 800;
  color: var(--black-color);
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
}

.app__social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  padding: 1rem;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--white-color);
    margin: 0.25rem 0;
    border: 1px solid var(--lightGray-color);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease-in-out;

    svg {
      width: 15px;
      height: 15px;
      color: var(--gray-color);
    }

    &:hover {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);

      svg {
        color: var(--white-color);
      }
    }

    @media screen and (min-width: 2000px) {
      width: 70px;
      height: 70px;

      margin: 0.5rem 0;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.app__navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem;

  .app__navigation-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cbcbcb;
    margin: 0.5rem;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--secondary-color);
    }

    @media screen and (min-width: 2000px) {
      width: 20px;
      height: 20px;
    }
  }
}

@media screen and (max-width: 500px) {
  .app__navigation,
  .app__social {
    display: none;
  }

  .copyright {
    padding: 2rem;
  }
}
`