module.exports = (req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allows-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Contro-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}