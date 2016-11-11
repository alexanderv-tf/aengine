import fetch from 'isomorphic-fetch'

import {
    FETCH_MANAGERS_REQUEST,
    FETCH_MANAGERS_SUCCESS,
    // FETCH_USER_FAIL
} from '../constants/Admin'


export function fetchManagers() {
    return dispatch => {
        dispatch({
            type: FETCH_MANAGERS_REQUEST
        })

        fetch('http://172.28.20.41:8080/managers')
            .then( response => response.json() )
            .then( json => dispatch({
                type: FETCH_MANAGERS_SUCCESS,
                payload: json._embedded.managers
            }))
    }
}