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
        axios.post('/reports.json', reportData)
            .then(response => {
                dispatch(insertReportSuccess(response.data.name, reportData))
            })
            .catch(error => {
                dispatch(insertReportFail(error))
            });
    }
}
export const fetchReportsSuccess = (reports) => {
    return {
        type: actionsTypes.FETCH_REPORTS_SUCCESS,
        reports: reports
    };
};

export const fetchReportsFail = (error) => {
    return {
        type: actionsTypes.FETCH_REPORTS_FAIL,
        error: error
    };
};

export const fetchReportsStart = () => {
    return {
        type: actionsTypes.FETCH_REPORTS_START
    };
};

export const fetchReports = () => {
    return dispatch => {
        dispatch(fetchReportsStart())
        axios.get('/reports.json')
            .then(res => {
                console.log(res);
                const fetchedReports = [];
                for (let key in res.data) {
                    fetchedReports.push({
                        ...res.data[key],
                        id: key
                    });
                };
                dispatch(fetchReportsSuccess(fetchedReports));
            })
            .catch(err => {
                dispatch(fetchReportsFail(err));
            });
    }
}

export const deleteReportSuccess = (id) => {
    return {
        type: actionsTypes.EVENT_REPORT_DELETE,
        reportId: id
    }
}

export const deleteReport = (id) => {
    return dispatch => {
        axios.delete(`/reports/${id}`,{headers : {"Access-Control-Allow-Origin": "*"}})
            .then(() => {
                dispatch(deleteReportSuccess(id))
            })
            .catch(err => console.log(err.message))
    }
}