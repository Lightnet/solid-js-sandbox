/*
  Project Name: vite-solid-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express';

import { v4 as uuidv4 } from 'uuid';

//import { config } from 'dotenv';
//config();

const router = Router()

router.post('/e', async (req, res) => {
  res.set('Content-Type', 'application/json');

  res.send(JSON.stringify({api:'ERROR'}))
});

export default router;