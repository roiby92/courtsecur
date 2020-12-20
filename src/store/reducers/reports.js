import * as actionsTypes from '../actions/actionTypes'

const initalState = {
    eventsReports: [],
    loading: false,

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_EVENT_REPORT:
            return {
                ...state,
                loading: true
            };
        case actionsTypes.REMOVE_EVENT_REPORT:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            };
        default:
            return state;
    }
}


export default reducer;