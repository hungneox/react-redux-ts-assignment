import { combineReducers } from 'redux'

import { imageReducer } from './image'
import { sessionReducer } from './session'

export const rootReducer = combineReducers({
    session: sessionReducer,
    image: imageReducer,
})
