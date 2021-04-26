const middlewares = require("./middlewares/middlewares")
const express = require("express")
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: true }))
app.use(middlewares)


app.get("/", (req, res) => {
    res.sendStatus(200)
})


app.post("/", (req, res) => {
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
