const fs = require("fs")  // filesystem


module.exports = (req, res, next) => {
    if (fs.existsSync("./down")) {
        res.send("Sedang dalam masa maintenance.")
    } else {
        next()
    }
}
