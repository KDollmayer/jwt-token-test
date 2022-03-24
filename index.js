const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const PORT = 3000

const authRoute =  require('./routes/auth')



mongoose.connect(process.env.CONNECT_MONGODB, {
    useNewUrlParser: true
})
.then(console.log("Database Up"))
.catch(err => {
    console.log(err)
})

app.use(express.json())


app.use('/api/user', authRoute)

app.listen(PORT, () => console.log("Server up"))