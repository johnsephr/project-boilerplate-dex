import React from 'react'
import ButtonModalStyles from './Styles'

// MUI
import { Modal, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const ButtonModal = props => {
    const { classes } = props
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button type="button" onClick={handleOpen}>
                Open Modal
        </Button>
            <Modal
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.modalContent}>
                    <h2 id="simple-modal-title" className={classes.modalHeader}>Text in a modal</h2>
                    <p id="simple-modal-description" className={classes.modalBody}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                    {/* <Button className={classes.button}>Close</Button> */}
                </div>
            </Modal>
        </div>
    )
}

export default withStyles(ButtonModalStyles)(ButtonModal)