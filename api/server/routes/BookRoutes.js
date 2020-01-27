import { Router } from 'express'
import BookController from '../controllers/Bookcontroller'

const router = Router()
router.get('/book', BookController.getAllBook)
router.post('/book', BookController.addBook)
router.get('/book/:id', BookController.getBook)
router.put('/book/:id', BookController.updatedBook)
router.delete('book/:id', BookController.deleteBook)

export default router

