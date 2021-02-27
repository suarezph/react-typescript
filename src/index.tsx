import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import DefaultThemes from './components/themes'
import AppProvider from './proivders/app'
import App from './screens/app'

ReactDOM.render(
  <ThemeProvider theme={DefaultThemes}>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
