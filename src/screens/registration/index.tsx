import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import styles from './assets/styles.module.css'

const Registration: React.FC = () => {
  return (
    <div className={styles.background}>
      <Container maxWidth="sm" className={styles.login}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="fname"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Submit
        </Button>
      </Container>
    </div>
  )
}

export default Registration
