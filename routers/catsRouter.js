import express from 'express'
import controllers from '../controllers/cats.js'
import valid from '../validation/validation.js'
const router = express.Router()

router.get(async(req,res,next)=>{
    console.log(req.url)
    next()
})

router.get('/',controllers.getAll)

router.get('/:id',valid.validateMongoId,controllers.getById)

router.post('/',valid.createCat,controllers.create)

router.delete('/:id',valid.validateMongoId,controllers.remove)

router.put('/:id',valid.validateMongoId,valid.updateCat,controllers.update)

export default router