import React from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {Badge, Button} from '@material-ui/core'
import useLayout from '../../components/material-ui/layout'
import useButtons from '../../components/material-ui/buttons'

interface Props {
  logo?: string
  stateDrawer: boolean
  handleDrawer: () => void
}

const TopBar: React.FC<Props> = ({logo, stateDrawer, handleDrawer}) => {
  const layouts = useLayout()
  const buttons = useButtons()

  return (
    <AppBar
      position="fixed"
      color="transparent"
      className={clsx(layouts.appBar, stateDrawer && layouts.appBarShift)}
    >
      <Toolbar className={layouts.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleDrawer}
          className={clsx(
            layouts.menuButton,
            stateDrawer && layouts.menuButtonHidden,
          )}
        >
          <MenuIcon />
        </IconButton>

        <Badge overlap="circle" badgeContent=" " variant="dot">
          <Button className={buttons.IconButtonStyledOne}>
            <NotificationsIcon />
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
