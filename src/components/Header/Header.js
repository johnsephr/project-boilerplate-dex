import React, { useState, Fragment } from 'react'
import headerStyles from './Styles'

// MUI
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const Header = props => {
    const { classes } = props
    const [primary, setPrimary] = useState(true)
    const togglePrimary = () => {
        setPrimary(!primary)
    }
    return (
        <Fragment>
            <AppBar
                position='static'
                color='primary'
                className={classes.root}
            >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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

export default withStyles(headerStyles)(Header)
