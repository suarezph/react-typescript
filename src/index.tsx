import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from '@material-ui/core/styles'
import Themes from './components'
import AppProvider from './proivders/app'
import App from './screens/app'

ReactDOM.render(
  <ThemeProvider theme={Themes.default}>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
