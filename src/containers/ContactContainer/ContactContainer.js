import React, { Fragment } from 'react'

// MUI
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        zIndex: 999,
        height: '100%',
        width: '100%',
    },
    buttons: {
        display: 'inline-block',
        width: '300px',
        height: '50px',
        position: 'absolute',
        top: 0,
        right: '60px', // was 50px
        transformOrigin: 'top right',
        transform: 'rotate(-90deg)',
        paddingRight: '50px'
    },
    button: {
        cursor: 'pointer',
        color: '#141414',
        transition: '300ms ease-in-out',
        "&:hover": {
            // transform: 'scale(1.05)'
            transform: 'translateY(-3px)'
          }
    }
}))


const ProjectsContainer = props => {
    const classes = useStyles(props)
    const preventDefault = event => event.preventDefault()
    const Behance = "https://www.behance.net/mchllgorski"
    const LinkedIn = "https://www.linkedin.com/in/michelle-gorski-78a5b9179/"
    return (
        <div className={classes.root}>
            <div className={classes.buttons}>
                <Link href={Behance}  target="_blank"  variant="h5" className={classes.button} underline="none" style={{ float: 'left' }}>Behance</Link>
                <Link href={LinkedIn} target="_blank" variant="h5" className={classes.button} underline="none"  style={{ float: 'right' }}>LinkedIn</Link>
            </div>
        </div>
    )
}

export default ProjectsContainer