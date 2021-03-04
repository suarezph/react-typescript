import React from 'react'
import { AxiosResponse } from 'axios'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import RegisterAPI, { RegisterTypes } from '../../services/registerApi'
import styles from './assets/styles.module.css'

const Registration: React.FC = () => {
  const [isFetching, setStateIsFetching] = React.useState(false)

  const schema = yup.object().shape({
    fullname: yup.string().required('FullName is Required'),
    // email: yup
    //   .string()
    //   .required('Email Address is Required')
    //   .email('Should be valid email address'),
    // password: yup
    //   .string()
    //   .required('Password is Required')
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    //   ),
    // passwordConfirmation: yup
    //   .string()
    //   .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const { register, handleSubmit, setError, errors } = useForm<RegisterTypes>({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
  })

  const onSubmit = async (data: RegisterTypes) => {
    RegisterAPI(data)
      .then((response: AxiosResponse) => {
        console.log(response)
        setStateIsFetching(false)
      })
      .catch((error: AxiosResponse) => {
        if (error && error.data) {
          const fromAPIError = error.data

          fromAPIError.map((item: any) => {
            if (item.email) {
              setError('email', {
                type: 'manual',
                message: item?.email?.isNotEmpty,
              })
            }
            if (item.password) {
              setError('password', {
                type: 'manual',
                message: item?.password?.isNotEmpty,
              })
            }
          })
        }
      })
  }

  return (
    <div className={styles.background}>
      <Container maxWidth="sm" className={styles.login}>
        {isFetching && <p>Loading</p>}
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
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                type="password"
                label="Confirm password"
                autoComplete="current-password"
                inputRef={register}
              />
              {errors.passwordConfirmation && (
                <p>{errors.passwordConfirmation.message}</p>
              )}
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
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default Registration
