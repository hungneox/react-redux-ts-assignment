import { ImageAction, ReduxAction } from '../action'
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

export const imageReducer = (state = initialImageState, action: ReduxAction): ImageState => {
    if (action.type === ImageAction.FETCH_IMAGES_REQUEST) {
        return { ...state, isFetching: true }
    }

    if (action.type === ImageAction.FETCH_IMAGES_SUCCESS) {
        return {
            ...state,
            isFetching: false,
            images: action.payload.images.reduce((prev, cur) => ({ ...prev, [cur.id]: cur }), {}),
        }
    }

    if (action.type === ImageAction.FETCH_IMAGES_FAILED) {
        return {
            ...state,
            isFetching: false,
        }
    }
    return state
}
