import { authService } from '../auth.service'

describe('Auth Service', () => {
    it('should allow one of defined users be logged in', async () => {
        const user = await authService.login('user1')
        expect(user.id).toBe(0)
    })
})