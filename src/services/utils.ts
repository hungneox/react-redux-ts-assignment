let currentUserId: number | undefined = undefined

export const sleep = (miliseconds: number) => new Promise<void>(resolve => setTimeout(resolve, miliseconds))
export const setCurrentUserId = (userId: number) => (currentUserId = userId)
export const clearCurrentUserId = () => (currentUserId = undefined)
export const getCurrentUserId = () => currentUserId
