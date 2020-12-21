import * as actionsTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initalState = {
    reports: [],
    loading: false,
    error: false

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.EVENT_REPORT_START:
            return updateObject(state, { loading: true });
        case actionsTypes.EVENT_REPORT_SUCCESS:
            const newReport = updateObject(action.reportData, { id: action.reportId });
            return updateObject(state, { loading: false, reports: state.reports.concat(newReport) });
        case actionsTypes.EVENT_REPORT_FAIL:
            return updateObject(state, { loading: false });
        default:
            return state;
    }
}


export default reducer;