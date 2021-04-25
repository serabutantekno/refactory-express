const express = require("express")
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/user/:userId/book/:bookId", (req, res) => {
    res.send(`User ID: ${req.params.userId} ==> Book ID: ${req.params.userId}`)
})


app.post("/", (req, res) => {
    /* Calling:
            - req.body (contains json) requires the use of json parser ==> express.json()
            - req.body (contains form data) requires the use of ==> express.urlencoded()
    */
    console.log(req.body)
    res.send("post")
})


app.put("/", (req, res) => {
    res.send("put")
})


app.delete("/", (req, res) => {
    res.send("delete")
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
