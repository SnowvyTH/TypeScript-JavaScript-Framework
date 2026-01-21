import express from 'express'
import { Request, Response } from 'express'
import pool from '../utils/db'

//สร้าง instance route ของ express
const router = express.Router()

router.get('/testdb', async (_: Request, res: Response): Promise<void> => {
    try {
        const client = await pool.connect()
        client.query('SELECT NOW()')
        res.status(200).json({
            message: `Database Connection Successful!`
        })
        client.release()
    } catch (error) {
        res.status(500).json({
            message: `Database Connection failed! + ${error}`,
            error: error
        })
    }
})

export default router