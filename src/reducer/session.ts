import { AnyAction } from 'redux'

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

export const sessionReducer = (state = initialSessionState, action: AnyAction): SessionState => {
    return state
}
