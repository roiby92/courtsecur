import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import ReportSummery from './ReportSummery';
import * as actions from '../../store/actions/index'
const useStyles = makeStyles({
    root: {
        width: "333px",
        height: '150px'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const ReportCard = (props) => {
    const classes = useStyles();
    const { report } = props
    const [open, setOpen] = useState(false)
    const userEmail = useSelector(state => state.auth.email)

    const dispatch = useDispatch();
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    let deleteIcon
    if (userEmail === "sharonnoah8@gmail.com") {
        deleteIcon = <ClearIcon onClick={() => {
            console.log('Clicked');
            dispatch(actions.deleteReport(report.id))
        }} />
    }
    else {
        deleteIcon = null
    }
    return (
        <Grid item xs={4}>
            <Card className={classes.root} >
                <CardContent onClick={handleOpen}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {report.name}
                    </Typography>
                    <Typography variant="h5" >
                        {report.location}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {report.type}
                    </Typography>
                </CardContent>
               {deleteIcon} 
            </Card>
            <ReportSummery open={open} handleClose={handleClose} report={report} />
        </Grid>

    );
}

export default ReportCard
