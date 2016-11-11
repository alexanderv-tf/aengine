import fetch from 'isomorphic-fetch'
import { API_URL } from '../constants/API_URL'

import {
    FETCH_SEGMENTS_REQUEST,
    FETCH_SEGMENTS_SUCCESS,
    UPDATE_SEGMENT_REQUEST,
    UPDATE_SEGMENT_SUCCESS
} from '../constants/Segment'


export function getSegments() {
    return dispatch => {
        dispatch({
            type: FETCH_SEGMENTS_REQUEST
        })

        fetch(API_URL+'/segments')
            .then( response => response.json() )
            .then( json => dispatch({
                type: FETCH_SEGMENTS_SUCCESS,
                payload: json._embedded.segments
            }))
    }
}

export function updateSegment(id, name, description) {
    return dispatch => {
        dispatch({
            type: UPDATE_SEGMENT_REQUEST
        })

        fetch( API_URL+'/segments/'+id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify( { name: name, description:description } )
        })
            .then(response => response.json())
            .then(json => dispatch({
                type: UPDATE_SEGMENT_SUCCESS,
                payload:json
            }))
    }
}