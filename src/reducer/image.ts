import { AnyAction } from 'redux'

import { ImageData } from '../services/image.service'

/**
 * Set of normalized data.
 * @see https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
 */
interface NormalizedList<T> {
    [id: number]: T
}

export interface ImageState {
    images: NormalizedList<ImageData>
    isFetching: boolean
}

const initialImageState: ImageState = {
    images: {},
    isFetching: false,
}

export const imageReducer = (state = initialImageState, action: AnyAction): ImageState => {
    return state
}
