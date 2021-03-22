import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from '@/store'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyles'
import light from '@/styles/themes/light'
import Header from '@/components/Header'
import Shopping from '@/pages/Shopping'

import 'react-toastify/dist/ReactToastify.min.css'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <ToastContainer newestOnTop />
      <Header />
      <Shopping />
    </ThemeProvider>
  </Provider>
)

export default App
