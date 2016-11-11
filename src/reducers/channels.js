import {
    GET_CHANNELS_REQUEST,
    GET_CHANNELS_SUCCESS
} from '../constants/Channel'

const initialState = {
        channels:[]
}

export default function channels ( state=initialState, action ) {

    switch (action.type) {

        case GET_CHANNELS_REQUEST:
            return state

        case GET_CHANNELS_SUCCESS:
            return { ...state, channels: action.payload }

        default:
            return state
    }
}