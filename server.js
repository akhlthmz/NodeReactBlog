const express = require('express')
const cors = require('cors')
const userRouter = require("./routes/user");
const registerRouter = require("./routes/register");
const articleRouter = require('./routes/articles')

const port = process.env.PORT || 5000


const app = express()
//Init middlewares CORS and body parser
app.use(cors())
app.use(express.json())


app.use('/register',registerRouter)
app.use('/users',userRouter)
app.use('/articles',articleRouter)



app.listen(port,()=>{
    console.log("App is listening at port " + port)
})