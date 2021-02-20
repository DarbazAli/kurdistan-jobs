'use strict'
console.clear()

import app from './express.js'
import config from '../config/config.js'

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})
