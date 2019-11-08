import { clearCurrentUserId, setCurrentUserId, sleep } from './utils'

/**
 * User record structure
 */
export interface UserData {
    id: number
    username: string
}

/**
 * Fake database
 */
const users: UserData[] = [
    {
        id: 0,
        username: 'user1',
    },

    {
        id: 1,
        username: 'user2',
    },

    {
        id: 2,
        username: 'user3',
    },
]

/**
 * AuthService behaviour
 */
interface AuthService {
    login(username: string): Promise<UserData>
    logout(): Promise<void>
    getUser(userId: number): Promise<UserData>
}

/**
 * AuthService implementation
 */
export const authService: AuthService = {
    async login(username: string) {
        await sleep(50)
        const loggedUser = users.find(user => user.username.toLowerCase() === username)
        if (!loggedUser) {
            throw new Error('user not found, please use one of those username: user1, user2, user3')
        }
        setCurrentUserId(loggedUser.id)
        return loggedUser
    },

    async logout() {
        await sleep(50)
        clearCurrentUserId()
    },

    async getUser(userId: number) {
        await sleep(50)
        const foundUser = users.find(user => user.id === userId)
        if (!foundUser) {
            throw new Error('user not found')
        }
        return foundUser
    },
}

export const getRandomUser = () => users[Math.floor(Math.random() * users.length)]
