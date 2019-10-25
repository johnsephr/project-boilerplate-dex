import React, { Component } from 'react'
import themeToggleStyles from './Styles'

// Containers
import { ThemeContext } from '../../containers/ThemeProvider'

// MUI
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const ThemeToggle = props => {
    const { classes } = props
    return (
        <ThemeContext.Consumer>
            {({ toggleDarkMode }) => (
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={toggleDarkMode}
                    className={classes.root}
                >
                    Toggle light/dark theme
                </Button>
            )}
        </ThemeContext.Consumer>
    )
}

export default withStyles(themeToggleStyles)(ThemeToggle)
