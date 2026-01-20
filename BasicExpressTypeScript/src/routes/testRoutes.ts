import express from 'express'
import { Request, Response } from 'express'
//สร้าง instance route ของ express
const router = express.Router()

router.get('/', (_: Request, res: Response): void => {
    res.send("Hello World ")
})

router.get('/about', (_: Request, res: Response): void => {
    res.send("About Page")
})

router.get('/contact', (_: Request, res: Response): void => {
    res.send("Contact Us")
})

export default router