const mongoose = require('mongoose')
mongoose.connect('mongodb://javas:1qs2wd3ef@cluster0-shard-00-00-xi6pm.mongodb.net:27017,cluster0-shard-00-01-xi6pm.mongodb.net:27017,cluster0-shard-00-02-xi6pm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
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