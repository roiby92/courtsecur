import * as actionsTypes from './actionTypes'
import axios from '../../axios-base'

export const addPressureSuccess = (id, pressure) => {
    return {
        type: actionsTypes.ADD_PRESSURE_SUCCESS,
        pressureId: id,
        pressureData: pressure
    }
}

export const addPressureFail = (error) => {
    return {
        type: actionsTypes.ADD_PRESSURE_FAIL,
        error: error
    }
}

export const addPressureStart = () => {
    return {
        type: actionsTypes.ADD_PRESSURE_START
    }
}

export const addPressure = (pressureData) => {
    return dispatch => {
        dispatch(addPressureStart());
        axios.post('/pressure.json', pressureData)
            .then(response => {
                dispatch(addPressureSuccess(response.data.name, pressureData))
            })
            .catch(error => {
                dispatch(addPressureFail(error))
            });
    }
}
export const fetchPressureSuccess = (pressureList) => {
    return {
        type: actionsTypes.FETCH_PRESSURE_SUCCES,
        pressure: pressureList
    };
};

export const fetchPressureFail = (error) => {
    return {
        type: actionsTypes.FETCH_PRESSURE_START,
        error: error
    };
};

export const fetchPressureStart = () => {
    return {
        type: actionsTypes.FETCH_PRESSURE_START
    };
};

export const fetchPressure = () => {
    return dispatch => {
        dispatch(fetchPressureStart())
        axios.get('/pressure.json')
            .then(res => {
                const fetchedPressure = [];
                for (let key in res.data) {
                    fetchedPressure.push({
                        ...res.data[key],
                        id: key
                    });
                };
                console.log(fetchedPressure);
                dispatch(fetchPressureSuccess(fetchedPressure));
            })
            .catch(err => {
                dispatch(fetchPressureFail(err));
            });
    }
}