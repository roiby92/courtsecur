import { Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddNewGard from '../components/Gards/AddNewGard'
import GardCard from '../components/Gards/GardCard';

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

const Gards = () => {
    const classes = useStyles();

    const gards = useSelector(state => state.gards.gards)
    const userEmail = useSelector(state => state.auth.email)

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    let addButtun
    if (userEmail === "sharonnoah8@gmail.com") {
        addButtun = (
            <Tooltip
                title='Add New Gard'
                aria-label='Add New Gard'
                onClick={handleOpen}
            >
                <Fab className={classes.absolute} color='primary'>
                    <AddIcon />
                </Fab>
            </Tooltip>
        )
    } else {
        addButtun = null
    }

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
        >
            {gards.map(g => <GardCard key={g.id} gard={g} />)}
            {addButtun}
            <AddNewGard open={open} handleClose={handleClose} />
        </Grid>
    )
}

export default Gards
