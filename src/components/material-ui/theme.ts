import {createMuiTheme} from '@material-ui/core/styles'
import Colors from './colors'

const pxtoRem = (px: number): string => `${px / 16}rem`

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

const drawerWidth = 280

export {drawerWidth, pxtoRem}
export default theme
