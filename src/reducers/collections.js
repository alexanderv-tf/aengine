import {
    FETCH_COLLECTION_REQUEST,
    FETCH_COLLECTION_SUCCESS,
    UPDATE_COLLECTIONS_REQUEST,
    ADD_COLLECTION_SUCCESS,
    EDIT_COLLECTION_SUCCESS
} from '../constants/Collection'

const initialState = {
    collections: []
}

export default function collections(state=initialState, action) {

    switch (action.type) {
        case FETCH_COLLECTION_REQUEST:
            return state
        case FETCH_COLLECTION_SUCCESS:
            return { ...state, collections: action.payload  }
        case UPDATE_COLLECTIONS_REQUEST:
            return state
        case ADD_COLLECTION_SUCCESS:
            return { ...state, collections: addCollection(state.collections, action.payload) }
        case EDIT_COLLECTION_SUCCESS:
            return { ...state, collections: editCollection(state.collections, action.payload)}
        default:
            return state
    }
}

function addCollection(collections, json) {
    collections.push(json)
    return collections
}

function editCollection(collections, json){
    collections.forEach(function (collection) {
        if( collection.id == json.id ){
            collection.name = json.name
            collection.expiryDate = json.expiryDate
            collection.crontabExpression = json.crontabExpression
            collection.offerId = json.id
            collection.segmentId = json.id
            collection.active = json.active
        }
    })
    return collections

}