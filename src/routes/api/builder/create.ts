import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

const create = (router: Router, service: StoreService): void => {
  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await service.create(data)

      HttpResponse.success(res, result, 201)
    } catch (err) {
      next(err)
    }
  })
}

export default create
