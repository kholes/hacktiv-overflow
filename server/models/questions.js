const mongoose = require('mongoose')
mongoose.connect('mongodb://javas:1qs2wd3ef@cluster0-shard-00-00-xi6pm.mongodb.net:27017,cluster0-shard-00-01-xi6pm.mongodb.net:27017,cluster0-shard-00-02-xi6pm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
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