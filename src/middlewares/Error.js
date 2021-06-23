module.exports = (err, req, res, next) => {
    const hhtpStatus = err.status || 500

    return res.status(hhtpStatus).send({
        status: hhtpStatus,
        message: err.message || "Internal Server Error"
    })
}