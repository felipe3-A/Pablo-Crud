import express from 'express'
import employesRouter from './routes/empleados.routes.js'

const app = express()

app.use(express.json())


app.use('/api',employesRouter)

app.listen(4000)
console.log('El servidor ya esta funcionando', 4000)


