import * as actionsTypes from '../actions/actionTypes'

const initalState = {
    gards: [],
    loading: false,
    error:false

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.EVENT_REPORT_START:
            return {
                ...state,
                loading: true
            };
        case actionsTypes.EVENT_REPORT_SUCCESS:
            const newReport = {
                ...action.reportData,
                id: action.reportId
            };
            return {
                ...state,
                loading: false,
                reports: state.reports.concat(newReport)
            };
        case actionsTypes.EVENT_REPORT_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}


export default reducer;