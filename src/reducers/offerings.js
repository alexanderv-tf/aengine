import {
    DEFINE_OFFER_SEND,
    DEFINE_OFFER_SUCCESS,
    DEFINE_OFFER_FAIL,
    GET_OFFERS_REQUEST,
    GET_OFFERS_SUCCESS
} from '../constants/Offering'


const initialState = {
    offerings: []
}

export default function offerings (state = initialState, action) {
    switch(action.type) {
        case GET_OFFERS_REQUEST:
            return state
        case GET_OFFERS_SUCCESS:
            return { ...state, offerings: action.payload }
        default:
            return state
    }
}