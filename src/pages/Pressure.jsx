import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions/index'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import PressureCard from '../components/Pressure/PressureCard'
import AddNewPressure from '../components/Pressure/AddNewPressure'
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '30px'
    },
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    }
}));

const Pressure = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const pressure = useSelector(state => state.pressure.pressure)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchPressure())
    }, [])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(actions.fetchReports())
    }, [])

    return (
        <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}>
            {pressure.map(pres => <PressureCard key={pres.id} pressure={pres} />)}
            <Tooltip
                title='Add New Pressure'
                aria-label='Add New Pressure'
                onClick={handleOpen}
            >
                <Fab className={classes.absolute} color='primary'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <AddNewPressure open={open} handleClose={handleClose} />
        </Grid>
    )
}

export default Pressure
