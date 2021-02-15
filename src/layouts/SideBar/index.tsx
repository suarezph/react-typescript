import React from 'react'
import clsx from 'clsx'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import {Link} from 'react-router-dom'
import useStyles from '../../components/material-ui/layout'
import Profile from './profile'

interface Props {
  logo?: string
  stateDrawer: boolean
  handleDrawer: () => void
}

const SideBar: React.FC<Props> = ({logo, stateDrawer, handleDrawer}) => {
  const classes = useStyles()

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !stateDrawer && classes.drawerPaperClose,
        ),
      }}
      open={stateDrawer}
    >
      <div className={classes.toolbarIcon}>
        <img src={logo} className={classes.logo} alt="Dibo Logo" />
        <IconButton onClick={handleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      {stateDrawer && (
        <Profile name="Alex John Suarez" email="alexjohnsuarez@gmail.com" />
      )}

      <List component="nav">
        {stateDrawer && (
          <ListSubheader
            component="div"
            style={{fontSize: '14px', paddingLeft: '20px'}}
          >
            Navigation Menu
          </ListSubheader>
        )}

        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon className={classes.listItemIconSub} />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            className={classes.listItem}
            disableTypography
          />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon className={classes.listItemIconSub} />
          </ListItemIcon>
          <ListItemText
            primary="Users"
            className={classes.listItem}
            disableTypography
          />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon className={classes.listItemIconSub} />
          </ListItemIcon>
          <ListItemText
            primary="Branch"
            className={classes.listItem}
            disableTypography
          />
        </ListItem>
        <Divider />
      </List>
      <List component="nav">
        {stateDrawer && (
          <ListSubheader
            component="div"
            style={{fontSize: '14px', paddingLeft: '20px'}}
          >
            Resources
          </ListSubheader>
        )}

        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon className={classes.listItemIconSub} />
          </ListItemIcon>
          <ListItemText
            primary="Support"
            className={classes.listItem}
            disableTypography
          />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideBar
