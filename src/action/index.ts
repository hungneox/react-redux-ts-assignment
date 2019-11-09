import { ActionCreatorsMapObject } from 'redux'

import { UserData } from '../services/auth.service'
import { ImageData } from '../services/image.service'
import { createAction } from './helper'

export enum AuthenticateAction {
    AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST',
    AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILED = 'AUTHENTICATE_FAILED',
}

export enum ImageAction {
    FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST',
    FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
    FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED',
}

export const sessionActions = {
    authenticateRequest: () => createAction(AuthenticateAction.AUTHENTICATE_REQUEST),
    authenticateSuccess: (user: UserData) => createAction(AuthenticateAction.AUTHENTICATE_SUCCESS, { user }),
    authenticateFailed: () => createAction(AuthenticateAction.AUTHENTICATE_FAILED),
}

export const imageActions = {
    fetchImagesRequest: () => createAction(ImageAction.FETCH_IMAGES_REQUEST),
    fetchImagesSuccess: (images: ImageData[]) => createAction(ImageAction.FETCH_IMAGES_SUCCESS, { images }),
    fetchImagesFailed: () => createAction(ImageAction.FETCH_IMAGES_FAILED),
}

type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>
export type ReduxAction = ActionUnion<typeof sessionActions> | ActionUnion<typeof imageActions>
