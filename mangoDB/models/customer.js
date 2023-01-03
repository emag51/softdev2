const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema(
    {
        CustomerId: Number,
        FullName:   String,
        Adress:     String
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Customer','CustomerSchema')
