import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions/index'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    div: {
        marginTop:'30px'
    },
}));
const Home = () => {
    const classes = useStyles();

    const reports = useSelector(state => state.reports.reports)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchReports())
    }, [])


    return (
        reports.map(report => <div className={classes.div} key={report.id}>{report.name}</div>)
    )
}

export default Home
