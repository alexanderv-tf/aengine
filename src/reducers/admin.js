import {
    FETCH_MANAGERS_REQUEST,
    FETCH_MANAGERS_SUCCESS,
    // FETCH_MANAGERS_FAIL
} from '../constants/Admin'

const initialState = {
    managers: []
}


export default function getManagers ( state=initialState, action ) {

    switch (action.type) {

        case FETCH_MANAGERS_REQUEST:
            return state

        case FETCH_MANAGERS_SUCCESS:
            return { ...state, managers: action.payload }

        default:
            return state
    }

}