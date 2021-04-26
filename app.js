const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.use("/user", require("./routes/user"))
app.use("/post", require("./routes/post"))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
