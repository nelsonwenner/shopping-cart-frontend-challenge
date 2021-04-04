import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

	* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

	body {
		background-color: ${({ theme }) => theme.background.secondary};
		color: ${({ theme }) => theme.text.primary};
    font-family: ${({ theme }) => theme.font.family};
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;
	}

	button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }
`

export default GlobalStyles
