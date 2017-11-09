const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dboverflow')
let Schema = mongoose.Schema, ObjectId = Schema.ObjectId
let questionsSchema = new Schema({
    title: String,
    question:{ 
        type: String,
        required: [true, "what are you question"]
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref:'Users'
    }],
    date: {
        type: Date 
    }
})
let Questions = mongoose.model('Questions', questionsSchema)
module.exports = Questions