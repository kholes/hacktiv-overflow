const express = require("express"), app = express()
const router = express.Router()
    router.get('/', (req,res) => {
        res.send("API hacktive overflow ready")
    })
module.exports = router