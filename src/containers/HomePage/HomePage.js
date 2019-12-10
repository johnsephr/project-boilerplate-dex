import React, { Fragment } from 'react'

// Components
import ThemeToggle from '../../components/Custom/ThemeToggle/ThemeToggle'
import Loader from '../../components/Custom/Utility/Loader/Loader'
import ButtonModal from '../../components/Custom/Utility/Modal/Modal'
import ClassComponent from '../../components/Custom/Utility/Templates/ClassComponent/ClassComponent'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    grid: {
        padding: 15
    },
    text: {
        flexGrow: 1,
        padding: 15
    }
}))

const HomePage = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <Typography variant="h6" className={classes.text}>
                Home Page!
            </Typography>

            <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={6}>
                    <ThemeToggle />
                    <ClassComponent />
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

export default HomePage