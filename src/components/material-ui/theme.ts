import {createMuiTheme} from '@material-ui/core/styles'
import Colors from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: Colors.primary.light,
      main: Colors.primary.main,
      dark: Colors.primary.dark,
      contrastText: Colors.primary.contrastText,
    },
  },
  typography: {
    fontSize: 12,
  },
})

export default theme
