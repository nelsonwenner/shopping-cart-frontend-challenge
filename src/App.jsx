import React from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyles'
import light from '@/styles/themes/light'

const App = () => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <h1>Hellow World!!</h1>
  </ThemeProvider>
)

export default App
