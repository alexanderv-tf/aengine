import fetch from 'isomorphic-fetch'
import { API_URL } from '../constants/API_URL'

import {
    GET_HISTORY_REQUEST,
    GET_HISTORY_SUCCESS
} from '../constants/History'


export function getHistory() {
    return dispatch => {
        dispatch({
            type: GET_HISTORY_REQUEST
        })

        fetch(API_URL+'/historyViews')
            .then( response => response.json() )
            .then( json => dispatch({
                type: GET_HISTORY_SUCCESS,
                payload: json._embedded.historyViews
            }))
    }
}