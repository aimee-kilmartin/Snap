import connection from './connection.ts'
import { Score } from '../../models/score.ts'

export async function getAllScores(db = connection): Promise<Score[]> {
  return db('scores').select()
}
