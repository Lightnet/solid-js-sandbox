/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import {Router} from 'express'

const router = Router()

// define the home page route
router.get('/echo', (req, res) => {
  res.send('echo')
})

export default router;