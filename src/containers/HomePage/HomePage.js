import React, { Fragment } from 'react'

// Components
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    grid: {
        // padding: '125px'
        padding: 0
    },
    headerContainer: {

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
            <HeaderContainer />
            <ProjectsContainer />
        </Fragment>
    )
}

export default HomePage