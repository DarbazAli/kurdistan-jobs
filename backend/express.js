import express from 'express'
import jobRouter from './routes/jobRoutes.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('API is working')
})

app.use(jobRouter)

export default app
