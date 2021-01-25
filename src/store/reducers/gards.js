import * as actionsTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initalState = {
    gards: [],
    loading: false,
    error: false

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_GARD_START: return updateObject(state, { ...state, loading: true });
        case actionsTypes.ADD_GARD_SUCCESS:
            const newGard = { ...action.gardData, id: action.gardId };
            return updateObject(state, { ...state, loading: false, reports: state.gards.concat(newGard) });
        case actionsTypes.ADD_GARD_FAIL: return updateObject(state, { ...state, loading: false })
        case actionsTypes.FETCH_GARDS_START: return updateObject(state, { loading: true })
        case actionsTypes.FETCH_GARDS_SUCCES: return updateObject(state, { gards: action.gards, loading: false })
        case actionsTypes.FETCH_GARDS_FAIL: return updateObject(state, { loading: false });
        default: return state;
    }
}


export default reducer;