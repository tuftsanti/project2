const {Schema, model} = require('mongoose')

const itemSchema = new Schema ({
    artist: {type: String, required: true},
    date: {type: String, required: true},
    location: String,
    listenedTo: Boolean
}) //, {timestamps: true})

module.exports = model('Item', itemSchema)