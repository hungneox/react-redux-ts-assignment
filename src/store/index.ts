import { createStore } from 'redux'

import { rootReducer } from '../reducer'

/**
 * Create store from rootReducer
 */
export const store = createStore(rootReducer)

/**
 * Define state tree type.
 */
export type StateType = ReturnType<typeof rootReducer>
