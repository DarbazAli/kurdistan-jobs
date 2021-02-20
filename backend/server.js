'use strict'
console.clear()
import mongoose from 'mongoose'
import app from './express.js'
import config from '../config/config.js'

mongoose
  .connect(config.mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})
