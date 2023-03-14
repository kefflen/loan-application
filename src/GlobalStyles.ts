import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
		/* overflow-x: hidden; */
  }

  .app {
    min-height: 100vh;
    width: 100vw; // Other possible solution would be to use initial window size
		max-width: 100%;
		padding: 1.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.8rem;
  }

`
