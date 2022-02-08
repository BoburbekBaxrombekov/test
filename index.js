const express = require('express')
const app = express()
const port = process.env.PORT || 4001

app.get("/", (req, res) => {
    res.send("ok")
})
app.listen(port, console.log(port))