import fetch from 'isomorphic-fetch'
import {API_URL } from '../constants/API_URL'
import {getSegments} from './SegmentsActions'
import {getOffers} from './OfferingActions'
import {getChannels} from './ChannelsActions'

import {
    FETCH_COLLECTION_REQUEST,
    FETCH_COLLECTION_SUCCESS,
    UPDATE_COLLECTIONS_REQUEST,
    ADD_COLLECTION_SUCCESS,
    EDIT_COLLECTION_SUCCESS
} from '../constants/Collection'

export function fetchCollection() {
    return dispatch => {

        dispatch({
            type: FETCH_COLLECTION_REQUEST
        })

        fetch(API_URL+'/collections')
            .then( response=> response.json())
            .then( json => dispatch({
                type: FETCH_COLLECTION_SUCCESS,
                payload: json._embedded.collections
            }))
    }
}

export function saveCollection(id, name, offeringId, segmentId, channelId){
    //NOTES: id=true ->edit collection, id=false ->new collection
    return dispatch => {
        dispatch({
            type: UPDATE_COLLECTIONS_REQUEST
        })

        fetch( id ? API_URL+'/collections/'+id : API_URL+'/collections', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: id ? 'PATCH' : 'POST',
            body: JSON.stringify({
                    name: name,
                    segmentId: parseInt(segmentId),
                    offerId: parseInt(offeringId),
                    channelId: parseInt(channelId),
                    crontabExpression: "0 59 23 * * *", // required to define collection
                    expiryDate: "2017-11-10T22:00:00.000+0000" // required to define collection
                })
        })
            .then( response => response.json() )
            .then ( json => dispatch({
                type: id ? EDIT_COLLECTION_SUCCESS : ADD_COLLECTION_SUCCESS,
                payload: json
            }))
    }
}

export const fetchSegments = getSegments
export const fetchOffers = getOffers
export const fetchChannels = getChannels