const userCad = require('./billingCycle')
const errorHandler = require('../../api/common/errorHandler')

userCad.methods(['get', 'post', 'put', 'delete'])
userCad.updateOptions({new: true, runValidators: true})
userCad.after('post', errorHandler).after('put', errorHandler)

userCad.route('get', (req, res, next) => {

    userCad.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    })
})

userCad.route('count', (req, res, next) => {
    userCad.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = userCad