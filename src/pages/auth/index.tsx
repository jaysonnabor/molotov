import React from 'react'
import Router from 'next/router'
import Layout from '../../app/AppLayout'

import AuthButton from '../../components/auth/AuthButton'
import AuthEmailField from '../../components/auth/AuthEmailField'
import AuthPasswordField from '../../components/auth/AuthPasswordField'
import AuthLayout from '../../components/auth/AuthLayout'

import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    }
  })
)

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  const classes = useStyles(useTheme())

  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Sign In'>
        <form className={classes.form} noValidate>
          <AuthEmailField />
          <AuthPasswordField />
          <AuthButton>Sign In</AuthButton>
          <Grid container>
            <Grid item xs>
              <Link
                href='#'
                onClick={() => Router.push('/auth/reset')}
                variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href='#'
                onClick={() => Router.push('/auth/signup')}
                variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Layout>
  )
}

export default Auth
