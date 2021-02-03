import * as actionsTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initalState = {
    pressure: [],
    loading: false,
    error: false

}
const addPressure = (state, action) => {
    const newPressure = updateObject(action.pressureData, {id: action.pressureId });
    return updateObject(state, { ...state, loading: false, pressure: state.pressure.concat(newPressure) });
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_PRESSURE_START: return updateObject(state, { ...state, loading: true });
        case actionsTypes.ADD_PRESSURE_SUCCESS: return addPressure(state, action)
        case actionsTypes.ADD_PRESSURE_FAIL: return updateObject(state, { ...state, loading: false })
        case actionsTypes.FETCH_PRESSURE_START: return updateObject(state, { loading: true })
        case actionsTypes.FETCH_PRESSURE_SUCCES: return updateObject(state, { pressure: action.pressure, loading: false })
        case actionsTypes.FETCH_PRESSURE_FAIL: return updateObject(state, { loading: false });
        default: return state;
    }
}


export default reducer;