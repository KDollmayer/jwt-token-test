const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 3000

const authRoute =  require('./routes/auth')

app.use('/api/user', authRoute)

app.listen(PORT, () => console.log("Server up"))