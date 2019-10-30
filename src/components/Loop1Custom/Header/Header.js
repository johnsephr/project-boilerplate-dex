import React, { Fragment } from 'react'

// MUI
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: 15,
    },
    title: {
        flexGrow: 1,
    }
}))

const Header = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <AppBar
                position='static'
                color='primary'
                className={classes.root}
            >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color='inherit' aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Loop 1
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header
