import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions/index'
import { makeStyles } from '@material-ui/core/styles';
import AddNewReport from '../components/Reports/AddNewReport'
import ReportCard from '../components/Reports/ReportCard';
const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '30px'
    },
}));

const Reports = () => {
    const classes = useStyles();

    const reports = useSelector(state => state.reports.reports)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchReports())
    }, [])

    return (
        <div>
            {reports.map(report => <ReportCard report={report} />)}
            <AddNewReport />
        </div>
    )
}

export default Reports;
