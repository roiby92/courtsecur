import * as actionsTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initalState = {
    reports: [],
    loading: false,
    error: false

};

const eventReportSuccess = (state, action) => {
    const newReport = updateObject(action.reportData, { id: action.reportId });
    return updateObject(state, { loading: false, reports: state.reports.concat(newReport) });
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.EVENT_REPORT_START: return updateObject(state, { loading: true });
        case actionsTypes.EVENT_REPORT_SUCCESS: return eventReportSuccess(state, action)
        case actionsTypes.EVENT_REPORT_FAIL: return updateObject(state, { loading: false });
        case actionsTypes.FETCH_REPORTS_START: return updateObject(state, { loading: true });
        case actionsTypes.FETCH_REPORTS_SUCCESS: return updateObject(state, { reports: action.reports, loading: false });
        case actionsTypes.FETCH_REPORTS_FAIL: return updateObject(state, { loading: false });
        default: return state;
    };
};


export default reducer;