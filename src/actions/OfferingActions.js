import fetch from 'isomorphic-fetch'
import { API_URL } from '../constants/API_URL'

import {
    ADD_OFFER_SEND,
    ADD_OFFER_SUCCESS,
    GET_OFFERS_REQUEST,
    GET_OFFERS_SUCCESS
} from '../constants/Offering'

export function getOffers() {

    return dispatch => {

        dispatch({
            type: GET_OFFERS_REQUEST
        })

        fetch(API_URL+'/offers')
            .then(response => response.json())
            .then(json => dispatch({
                type: GET_OFFERS_SUCCESS,
                payload: json._embedded.offers
            }))
    }
}

export function saveOffer(id, name, categoryId, description) {
    return dispatch => {
        dispatch({
            type: ADD_OFFER_SEND
        })
        if (id) console.log('ID - '+id);

        fetch( id ? API_URL+'/offers/'+id : API_URL+'/offers', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: id ? 'PATCH' : 'POST',
            body: JSON.stringify( { name: name, categoryId: categoryId, description: description } )
        })
            .then(response => response.json())
            .then(json => dispatch({
                type: ADD_OFFER_SUCCESS,
                payload: json
            }))
    }

}
