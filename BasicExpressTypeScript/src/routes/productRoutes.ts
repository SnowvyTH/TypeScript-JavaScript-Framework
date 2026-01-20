import express from 'express'
import { Request, Response } from 'express'
//สร้าง instance route ของ express
const router = express.Router()

// กำหนด interface สำหรับ product
interface Product {
    id: number
    name: string
    price: number
}

const products: Product[] = []

// GET /products สำหรับดึงสินค้าทั้งหมด
router.get('/products', (_: Request, res: Response): void => {
    res.json(products)
})

// GET /product/:id สำหรับดึงข้อมูลตาม id
router.get('/products/:id', (req: Request, res: Response): void => {
    const id = parseInt(req.params.id)
    const product = products.find((product => product.id === id))
    // ถ้าไม่พบข้อมูล
    if (!product) {
        res.status(404).json( { message: "Product not found" } )
        return
    }
    res.json(product)
})

//POST /products สำหรับเพิ่มข้อมูลสินค้า
router.post('/products', (req: Request, res: Response): void => {
    if (!req.body) {
        res.status(400).json({ message: "Request body is missing" })
        return
    }
    const { id, name, price } = req.body
    if (!id || !name || !price) {
        res.status(400).json({ message: "Missing required fields" })
        return
    }
})
export default router