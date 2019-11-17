import React from 'react'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const defaultTheme = {
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(',')
  }
}
const theme = createMuiTheme(defaultTheme)

export interface ThemerProps {
  children: any
}

const Themer: React.SFC<ThemerProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
          rel='stylesheet'></link>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <style jsx global>{`
        body {
          background: ${theme.palette.background.paper};
          font-family: ${theme.typography.fontFamily};
          color: ${theme.palette.primary.main};
        }
      `}</style>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default Themer
