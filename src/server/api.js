/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express'
import auth from "./auth/mongoose/auth.js"

const router = Router()

router.use('/auth',auth)

// define the home page route
router.get('/echo', (req, res) => {
  res.send('echo')
})

export default router;