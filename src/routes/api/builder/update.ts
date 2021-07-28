import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

const update = (router: Router, service: StoreService): void => {
  router.patch(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params.id
        const data = req.body
        const result = await service.update(id, data)

        HttpResponse.success(res, result)
      } catch (err) {
        next(err)
      }
    }
  )
}

export default update
