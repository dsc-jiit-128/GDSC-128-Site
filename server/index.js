const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ limit: '64mb' }))
app.use(cors())


const PORT = process.env.PORT || 5000
const MONGO_URL =
  'mongodb+srv://gdscj128:mongo2002@cluster0.wxbpuul.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('bufferCommands', false)
mongoose.connect(MONGO_URL, () => {
  console.log('databse connected')
  app.listen(PORT, () => {
    console.log('server is running at port 5000')
  })
})
