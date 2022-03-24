const router = require('express').Router()
const verify = require("./vertifyToken")

router.get("/", verify, (req, res) => {
    res.json({ 
        posts: {
             title: "My First Post", 
             desc: "Welcome, your token works" 
            } 
        })
})

module.exports = router