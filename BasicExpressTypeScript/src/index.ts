import express from 'express'
import testRoutes from './routes/testRoutes'
import productRoutes from './routes/productRoutes'
import dbtestRoutes from './routes/dbtestRoutes'

const app = express()

app.use(express.json())

app.use(testRoutes)
app.use('/api', productRoutes)
app.use('/api', dbtestRoutes)
// รัน server
app.listen(4000, () => {
    console.log("Server is running on port 4000")
})

export default app