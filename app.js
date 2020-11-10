const express = require('express')
const cors = require('cors')
const userRouter = require("./routes/user");
const registerRouter = require("./routes/register");
const articleRouter = require('./routes/articles')


const app = express()
app.use(cors())
app.use(express.json())


app.use('/register',registerRouter)
app.use('/users',userRouter)
app.use('/articles',articleRouter)

module.exports = app