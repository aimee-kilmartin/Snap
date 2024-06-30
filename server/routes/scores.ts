import { Router } from 'express'

import * as db from '../db/scores.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const scores = await db.getAllScores()

    res.json({ scores: scores.map((score) => score.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
