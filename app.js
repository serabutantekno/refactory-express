const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/", (req, res) => {
    res.render("index.ejs", {
        name: ""
    })
})

app.use("/user", require("./routes/user"))
app.use("/post", require("./routes/post"))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
