import faker from 'faker'

import { getRandomUser } from './auth.service'
import { getCurrentUserId, sleep } from './utils'

/**
 * Image Record structure
 */
export interface ImageData {
    id: number
    userId: number
    imageUrl: string
}

/**
 * Fake database, contains all image records
 */
let images: ImageData[] = Array(20)
    .fill(0)
    .map((_, id) => ({
        id,
        userId: getRandomUser().id,
        imageUrl: faker.image.image(),
    }))

let currentId = images.length

/**
 * Behaviour of ImageService
 */
interface ImageService {
    fetchAllImages(): Promise<ImageData[]>
    addImage(imageUrl: string): Promise<ImageData>
    deleteImage(imageId: number): Promise<ImageData | null>
}

/**
 * ImageService implementation
 */
export const imageService: ImageService = {
    async fetchAllImages() {
        await sleep(50)
        return images
    },

    async addImage(imageUrl: string) {
        await sleep(50)
        const userId = getCurrentUserId()
        if (!userId) {
            throw new Error('not authenticated')
        }
        const imageData: ImageData = {
            id: ++currentId,
            userId,
            imageUrl,
        }
        images.push(imageData)
        return imageData
    },

    async deleteImage(imageId: number) {
        await sleep(50)
        const userId = getCurrentUserId()
        if (!userId) {
            throw new Error('not authenticated')
        }
        const deletedImage = images.find(image => image.id === imageId)
        if (deletedImage && deletedImage.userId !== userId) {
            throw new Error('not authenticated')
        }
        images = images.filter(image => image.id !== imageId)
        return deletedImage || null
    }
}