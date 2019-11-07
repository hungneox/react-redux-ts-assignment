import { imageService } from '../image.service'
import { setCurrentUserId } from '../utils'

describe('Image Service', () => {
    it('should fetch all images', async () => {
        const images = await imageService.fetchAllImages()
        expect(images.length).toBe(20)
    })

    it('should allow adding new images', async () => {
        const mockUrl = 'http://mock.com/image.png'
        setCurrentUserId(0)
        const image = await imageService.addImage(mockUrl)
        expect(image.imageUrl).toBe(mockUrl)
    })

    it('should allow deleting image', async () => {
        setCurrentUserId((await imageService.getImage(0)).id)
        const image = await imageService.deleteImage(0)
        const images = await imageService.fetchAllImages()
        expect(image).toBeTruthy()
        expect(images[0].id).not.toBe(0)
    })
})