module.exports = (req, res, next) => {
    console.log("Request Body", req.body)
    console.log("URL params", req.params)
    console.log("URL query", req.query)
    next()
}
