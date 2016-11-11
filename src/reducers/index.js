import { combineReducers } from 'redux'
import segments from './segments'
import offerings from './offerings'
import channels from './channels'
import collections from './collections'
import admin from './admin'
import history from './history'

export const rootReducer = combineReducers({
    segments,
    offerings,
    channels,
    collections,
    admin,
    history
})