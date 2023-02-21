const { response } = require("express")

const router = require("express").Router()

// TODO : build a /registration controller

let userDB = []

router.post ("/register" , (req, res) => {
    let {name, email, password} = req.body
    try {
        userDB.push({name, email, password})
        console.log(userDB)
        res.status(201).json({
            message: `user created`
        })
    } catch (err) {
        res.status(500).json({
            message: `${err}`
        })

    }
    console.log(name, email, password)
})

// TODO : build a login controller

router.post("/login" , (req , res) => {
    console.log("login hit")

})

module.exports = router