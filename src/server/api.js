/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express'
import auth from "./mongoose/auth/auth.js"
import todolist from "./mongoose/todolist/todolist.js"
import blog from "./mongoose/blog/blog.js"
import mobilebase from "./mongoose/mobilebase/mobilebase.js"

const router = Router()

router.use('/auth',auth)
router.use('/todolist',todolist)
router.use('/blog',blog)
router.use('/mobilebase',mobilebase)

// define the home page route
router.get('/echo', (req, res) => {
  res.send('echo')
})

export default router;