import * as actionsTypes from './actionTypes'
import axios from '../../axios-base'

export const insertReportSuccess = (id, report) => {
    return {
        type: actionsTypes.EVENT_REPORT_SUCCESS,
        reportId: id,
        reportData: report
    }
}

export const insertReportFail = (error) => {
    return {
        type: actionsTypes.EVENT_REPORT_FAIL,
        error: error
    }
}

export const insertReportStart = () => {
    return {
        type: actionsTypes.EVENT_REPORT_START
    }
}

export const insertReport = (reportData) => {
    return dispatch => {
        dispatch(insertReportStart());
        axios.post('reports.json', reportData)
            .then(response => {
                dispatch(insertReportSuccess(response.data.name, reportData))
            })
            .catch(error => {
                dispatch(insertReportFail(error))
            });
    }

}