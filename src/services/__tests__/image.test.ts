import { imageService } from '../image.service'

describe('Image Service', () => {
    it('should fetch all images', async () => {
        const images = await imageService.fetchAllImages()
        expect(images.length).toBe(20)
    })

    it('should allow adding new images', async () => {
        const mockUrl = 'http://mock.com/image.png'
        const image = await imageService.addImage(0, mockUrl)
        expect(image.imageUrl).toBe(mockUrl)
    })

    it('should allow deleting image', async () => {
        const image = await imageService.deleteImage(0)
        const images = await imageService.fetchAllImages()
        expect(image).toBeTruthy()
        expect(images[0].id).not.toBe(0)
    })
})