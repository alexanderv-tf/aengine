import {
    FETCH_SEGMENTS_REQUEST,
    FETCH_SEGMENTS_SUCCESS,
    UPDATE_SEGMENT_SUCCESS
} from '../constants/Segment'

const initialState = {
    segments: []
}


export default function segments ( state=initialState, action ) {

    switch (action.type) {

        case FETCH_SEGMENTS_REQUEST:
            return state

        case FETCH_SEGMENTS_SUCCESS:
            return { ...state, segments: action.payload }

        case UPDATE_SEGMENT_SUCCESS:
            return { ...state, segments: updateSegments(state.segments, action.payload) }

        default:
            return state
    }
}

function updateSegments(segments, json){
    segments.forEach( function (segment){
        if (segment.id == json.id ){
            segment.name = json.name;
            segment.description = json.description;
            segment.sql = json.sql;
            segment.active = json.active;
        }
    })
    return segments;
}