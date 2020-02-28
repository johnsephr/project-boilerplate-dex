import React, { Fragment } from 'react'

// Components
import ContactContainer from '../ContactContainer/ContactContainer'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        display: 'flex',
        flexDirection: 'column',
        // alignContent: 'space-between',
        height: '100vh',
        padding: '125px',
        paddingTop: '150px',
        paddingBottom: 0
    },
    headingText: {
        height: '38%',
        zIndex: 2
    },
    titles: {
        display: 'block',
        textAlign: 'right',
        fontWeight: '100',
        height: '30%',
        opacity: .75
    },
    nameContainer: {
        height: '70%',
    },
    name: {
        lineHeight: '3rem'
    },
    contactContainer: {
        position: 'relative',
        // height: '62%',
        height: '75%',
        background: '#72C89E'
        // alignSelf: 'end'
    }
}))

const HeaderContainer = props => {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <div className={classes.headingText}>
                <div className={classes.titles}>
                    <Typography variant='h4' className={classes.titles}>UI Designer <br /> UX Researcher</Typography>
                </div>

                <div className={classes.nameContainer}>
                    <Typography variant="h1" style={{ width: '70%' }}>Michelle<br />Gorski</Typography>
                </div>
            </div>
            <div className={classes.contactContainer}>
                <ContactContainer />
            </div>
        </div>
    )
}

export default HeaderContainer