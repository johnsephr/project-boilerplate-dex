import React, { useState } from 'react'
import loaderStyles from './Styles'

import ClipLoader from 'react-spinners/ClipLoader'

// MUI
import { withStyles } from '@material-ui/core/styles'

const Loader = props => {
    const { classes } = props
    const [loading, setLoading] = useState(true)
    return (
        <div className={classes.container}>
            <ClipLoader
                className={classes.root}
                sizeUnit={"px"}
                size={20}
                color={'#68686E'}
                loading={loading}
            />
        </div>
    )
}

export default withStyles(loaderStyles)(Loader)