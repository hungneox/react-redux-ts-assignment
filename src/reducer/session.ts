import { AuthenticateAction, ReduxAction } from '../action'

export interface SessionState {
    userId: number | null
    username: string | null
    isAuthenticating: boolean
}

const initialSessionState: SessionState = {
    userId: null,
    username: null,
    isAuthenticating: false,
}

export const sessionReducer = (state = initialSessionState, action: ReduxAction): SessionState => {
    if (action.type === AuthenticateAction.AUTHENTICATE_REQUEST) {
        return { ...state, isAuthenticating: true }
    }

    if (action.type === AuthenticateAction.AUTHENTICATE_SUCCESS) {
        return {
            ...state,
            isAuthenticating: false,
            userId: action.payload.user.id,
            username: action.payload.user.username,
        }
    }

    if (action.type === AuthenticateAction.AUTHENTICATE_FAILED) {
        return {
            ...state,
            isAuthenticating: false,
        }
    }

    return state
}
