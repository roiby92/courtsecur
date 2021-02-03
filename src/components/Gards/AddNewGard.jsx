import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog'
import * as actions from '../../store/actions/index'

const AddNewGard = (props) => {
    const { open, handleClose } = props
    const [gard, setGard] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
    })

    const dispatch = useDispatch()

    const handleChange = event => {
        const key = event.target.name
        const value = event.target.value
        setGard({ ...gard, [key]: value })
    };

    const submitGard = () => {
        dispatch(actions.addGard(gard))
        setGard({
            name: '',
            email: '',
            phone: '',
            type: '',
        })
        handleClose()
    }

    return (

        <Dialog open={open} onClose={() => handleClose()} aria-labelledby="form-dialog-title">
            <Grid container
                direction="column"
                justify="space-evenly"
                alignItems="center">
                <Grid item>
                    <h3>Report Form</h3>
                </Grid>
                <Grid item>
                    <TextField
                        id="standard"
                        label="שם מאבטח"
                        name='name'
                        value={gard.name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standard"
                        label="אימייל"
                        name='email'
                        value={gard.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standard"
                        label="טלפון"
                        name='phone'
                        value={gard.phone}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standard"
                        type='number'
                        label="סוג מאבטח"
                        name='type'
                        value={gard.type}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={submitGard}>
                        Add Gard
                </Button>
                </Grid>
            </Grid >
        </Dialog>
    )
}

export default AddNewGard
