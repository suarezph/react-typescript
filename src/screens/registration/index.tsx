import React from 'react'
import { AxiosResponse, AxiosError } from 'axios'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import useYupValidationResolver from '../../components/forms'
import RegisterAPI, { RegisterTypes } from '../../services/registerApi'

import styles from './assets/styles.module.css'

const Registration: React.FC = () => {
  const [isFetching, setStateIsFetching] = React.useState(false)

  const validationSchema = React.useMemo(
    () =>
      yup.object({
        fullname: yup.string().required('FullName is Required'),
        email: yup.string().required('Email Address is Required'),
        password: yup.string().required('Password is Required'),
      }),
    [],
  )
  const resolver = useYupValidationResolver(validationSchema)
  const { register, handleSubmit, errors } = useForm({ resolver })

  const onSubmit = async (data: RegisterTypes) => {
    setStateIsFetching(true)

    RegisterAPI(data)
      .then((response: AxiosResponse) => {
        console.log(response)
        setStateIsFetching(false)
      })
      .catch((error: AxiosError) => {
        console.log(error)
        setStateIsFetching(false)
      })
  }

  return (
    <div className={styles.background}>
      <Container maxWidth="sm" className={styles.login}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid>
              <Typography component="h1" variant="h5">
                Registration
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="fullname"
                variant="outlined"
                required
                fullWidth
                id="fullname"
                label="Full Name"
                autoFocus
                inputRef={register}
              />
              {errors.fullname && <p>{errors.fullname.message}</p>}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                inputRef={register}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                type="password"
                label="Password"
                autoComplete="current-password"
                inputRef={register}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Submit
              </Button>
              {isFetching && <p>Loading</p>}
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default Registration
