import { Router } from 'express'
import AuthorController from '../controllers/Authorcontroller'

const router = Router()
router.get('/', AuthorController.getAllAuthors)
router.post('/', AuthorController.addAuthor)
router.get('/:id', AuthorController.getAuthor)
router.put('/:id', AuthorController.updatedAuthor)
router.delete('/:id', AuthorController.deleteAuthor)

export default router
