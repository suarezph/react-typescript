import React from 'react'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {makeStyles, withStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  profileSection: {
    margin: '17px',
    padding: '25px 15px',
    display: 'block',
    textAlign: 'center',
    background: 'rgba(59,62,102,.05)',
    borderRadius: '5px',
    border: '1px solid #fefefe',
  },
  profileName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  profileButton: {
    background: 'rgba(59,62,102,.1)',
    textTransform: 'capitalize',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  profileEmail: {
    fontSize: '11px',
  },
}))

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge)

interface Props {
  name: string
  email: string
}

const Profile: React.FC<Props> = ({name, email}) => {
  const classes = useStyles()

  return (
    <div className={classes.profileSection}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt={name} src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      <Box marginTop={1} className={classes.profileName}>
        {name}
      </Box>
      <Box className={classes.profileEmail}>({email})</Box>
      <Box marginTop={2}>
        <Button className={classes.profileButton}>View Profile</Button>
      </Box>
    </div>
  )
}

export default Profile
