import { Router } from 'express'
import * as MemberController from './member'

let router = Router()

router.get('/', MemberController.index)
router.post('/', MemberController.add)

export default router;