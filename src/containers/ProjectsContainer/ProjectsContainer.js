import React, { Fragment } from 'react'

// Components


// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// data
import projects from '../../data/projects'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        height: 'auto',
        display: 'flex',
        padding: '125px',
        flexDirection: 'column',
        // paddingBottom: 0
    },
    gridItem: {
        padding: '50px',
    },
    image: {},
    category: {
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
    },
    roles: {
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        paddingLeft: '15%',
        paddingRight: '15%'
    },
}))


// Image
// Category
// ProjectTitle
// Roles
// Description


const ProjectsContainer = props => {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <Grid
                container
                direction='row'
                alignContent='center'
                spacing={0}
                className={classes.grid}
            >
                {projects && projects.map((project, index, array) => {
                    return <Grid item xs={6} key={index} className={classes.gridItem}>
                        {/* <img src={} className={classes.image} /> */}
                        <Typography variant="h6" className={classes.category}>{project.category}</Typography>
                        <Typography variant="h5" className={classes.title}>{project.title}</Typography>
                        <Typography variant="body1" className={classes.roles}>{project.roles}</Typography>
                        <Typography variant="body1" className={classes.description}>{project.description}</Typography>
                        
                        {/* <Typography variant="body1">{project.title}</Typography> */}
                    </Grid>
                })}
            </Grid>
        </div>
    )
}

export default ProjectsContainer