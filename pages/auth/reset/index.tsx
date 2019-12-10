import React, { useState } from 'react'
import Router from 'next/router'
import Layout from '../../../components/app/AppLayout'

import AuthButton from '../../../components/auth/AuthButton'
import AuthEmailField from '../../../components/auth/AuthEmailField'
import AuthLayout from '../../../components/auth/AuthLayout'

import { Link, Grid } from '@material-ui/core'
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

export interface AuthResetProps {}

const AuthReset: React.SFC<AuthResetProps> = () => {
  const classes = useStyles(useTheme())

  const [email, setEmail] = useState<string>('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', e)
    console.log(email)
  }

  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Reset'>
        <form
          className={classes.form}
          onSubmit={e => submitHandler(e)}
          noValidate>
          <AuthEmailField setEmail={email => setEmail(email)} />
          <AuthButton disabled={true}>Reset</AuthButton>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                href='#'
                onClick={() => Router.push('/auth/confirm')}
                variant='body2'>
                {'Already have confirmation code?'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Layout>
  )
}

export default AuthReset
