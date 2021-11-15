import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { connect } from './utils/db'

export const app = express()

app.disable('x-powered-by')

// adding app level middleware
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/api/data', (req, res) => {
  res.json({ message: 'initial setup' })
})

app.post('/api/data', (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (error) {
    console.error(error)
  }
}
