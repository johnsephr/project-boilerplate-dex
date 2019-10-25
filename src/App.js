import React, { Fragment } from 'react'
import appStyles from './AppStyles'
import Header from './components/Header/Header'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Loader from './components/Utility/Loader/Loader'
import ButtonModal from './components/Utility/Modal/Modal'

//MUI
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const App = props => {
  const { classes } = props
  return (
    <Fragment>
      <Header />
      <Grid
        container
        direction='row'
        alignContent='center'
        spacing={1}
        className={classes.grid}
      >
        <Grid item xs={6}>
          <ThemeToggle />
        </Grid>

        <Grid item xs={12}>
          <Loader />
        </Grid>
       
        <Grid item xs={12}>
          <ButtonModal />
        </Grid>

      </Grid>
    </Fragment>
  )
}

export default withStyles(appStyles)(App)
