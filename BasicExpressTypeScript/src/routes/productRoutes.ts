import express from 'express'
import { Request, Response } from 'express'
import * as productController from '../controller/productController'

//สร้าง instance route ของ express
const router = express.Router()

// GET /products แสดงสินค้าทั้งหมด
router.get('/products', productController.getAllProducts)

// GET /products/:id แสดงสินค้าตาม id
router.get('/products/:id', productController.getProductById)

// POST /products สร้างสินค้าเพิ่ม
router.post('/products', productController.createProduct)

// PUT /products/:id แก้ไขสินค้าตาม id
router.put('/products/:id', productController.updateProduct)

// DELETE /products/:id ลบสินค้าตาม id
router.delete('/products/:id', productController.deleteProduct)

export default router