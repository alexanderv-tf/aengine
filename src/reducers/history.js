import {
    GET_HISTORY_REQUEST,
    GET_HISTORY_SUCCESS
} from '../constants/History'

const initialState ={
    history: []
}

export default function history (state=initialState, action) {
    switch (action.type){
        case GET_HISTORY_REQUEST:
            return state
        case GET_HISTORY_SUCCESS:
            return { ...state, history: action.payload }
        default:
            return state
    }
}