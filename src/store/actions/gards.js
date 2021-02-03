import * as actionsTypes from './actionTypes'
import axios from '../../axios-base'

export const addGardSuccess = (id, gard) => {
    return {
        type: actionsTypes.ADD_GARD_SUCCESS,
        gardId: id,
        gardData: gard
    }
}

export const addGardFail = (error) => {
    return {
        type: actionsTypes.ADD_GARD_FAIL,
        error: error
    }
}

export const addGardStart = () => {
    return {
        type: actionsTypes.ADD_GARD_START
    }
}

export const addGard = (gardData) => {
    return dispatch => {
        dispatch(addGardStart());
        axios.post('/gards.json', gardData)
            .then(response => {
                dispatch(addGardSuccess(response.data.name, gardData))
            })
            .catch(error => {
                dispatch(addGardFail(error))
            });
    }
}
export const fetchGardsSuccess = (gards) => {
    return {
        type: actionsTypes.FETCH_GARDS_SUCCES,
        gards: gards
    };
};

export const fetchGardsFail = (error) => {
    return {
        type: actionsTypes.FETCH_GARDS_FAIL,
        error: error
    };
};

export const fetchGardsStart = () => {
    return {
        type: actionsTypes.FETCH_GARDS_START
    };
};

export const fetchGards = () => {
    return dispatch => {
        dispatch(fetchGardsStart())
        axios.get('/gards.json')
            .then(res => {
                console.log(res);
                const fetchedGards = [];
                for (let key in res.data) {
                    fetchedGards.push({
                        ...res.data[key],
                        id: key
                    });
                };
                dispatch(fetchGardsSuccess(fetchedGards));
            })
            .catch(err => {
                dispatch(fetchGardsFail(err));
            });
    }
}