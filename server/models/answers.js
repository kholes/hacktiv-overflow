const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dboverflow')
let Schema = mongoose.Schema, ObjectId = Schema.ObjectId
let answersSchema = new Schema({
    answer:{ 
        type: String,
        required: [true, "Answer must be string"]
    },
    question: [{type: Schema.Types.ObjectId, ref: 'Questions'}],
    like: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    unlike: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    date: {
        type: Date 
    },
    user: [{type: Schema.Types.ObjectId, ref: 'Users'}]
})
let Answers = mongoose.model('Answers', answersSchema)
module.exports = Answers