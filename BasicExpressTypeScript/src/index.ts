import express from 'express'
import testRouter from './routes/testRoutes'
import productRouter from './routes/productRoutes'

const app = express()

app.use(express.json())

app.use(testRouter)
app.use('/api', productRouter)
// รัน server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

export default app