import React from 'react'

// Containers
import { ThemeContext } from '../../../containers/ThemeProvider'

// MUI
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {}
}))

const ThemeToggle = props => {
    const classes = useStyles(props)
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

export default ThemeToggle
