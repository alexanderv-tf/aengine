import fetch from 'isomorphic-fetch'
import {API_URL } from '../constants/API_URL'


import {
    GET_CHANNELS_REQUEST,
    GET_CHANNELS_SUCCESS
} from '../constants/Channel'

export function getChannels() {
    return dispatch => {
        dispatch({
            type: GET_CHANNELS_REQUEST
        })

        fetch(API_URL+'/channels')
            .then( response => response.json() )
            .then( json => dispatch({
                type: GET_CHANNELS_SUCCESS,
                payload: json._embedded.channels
            }))
    }

}