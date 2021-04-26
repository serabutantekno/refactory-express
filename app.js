const middlewares = require("./middlewares/middlewares")
const express = require("express")
const app = express()
const port = 3000
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage: storage })


app.use(express.urlencoded({ extended: true }))
app.use(middlewares)


app.get("/", (req, res) => {
    res.sendStatus(200)
})


app.post("/", upload.single("image"), (req, res) => {
    console.log(req.file)
    res.end()
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
