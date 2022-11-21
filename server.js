const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const StudentRouter = require('./routes/StudentRouter')
const ClassRouter = require('./routes/ClassRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/student', StudentRouter)
app.use('/class', ClassRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
