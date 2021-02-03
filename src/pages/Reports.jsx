import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions/index'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddNewReport from '../components/Reports/AddNewReport'
import ReportCard from '../components/Reports/ReportCard';
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

const Reports = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const reports = useSelector(state => state.reports.reports)
    const userEmail = useSelector(state => state.auth.email)
    const dispatch = useDispatch();
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(actions.fetchReports())
    }, [])
    let addButtun
    if (userEmail === "sharonnoah8@gmail.com") {
        addButtun = (
            <Tooltip
                title='Add New Report'
                aria-label='Add New Report'
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
        <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}>
            {reports.map(report => <ReportCard key={report.id} report={report} />)}
            {addButtun}
            <AddNewReport open={open} handleClose={handleClose} />
        </Grid>
    )
}

export default Reports;
