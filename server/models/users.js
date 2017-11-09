const mongoose = require('mongoose')
mongoose.connect('mongodb://javas:1qs2wd3ef@cluster0-shard-00-00-xi6pm.mongodb.net:27017,cluster0-shard-00-01-xi6pm.mongodb.net:27017,cluster0-shard-00-02-xi6pm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
let Schema = mongoose.Schema, ObjectId = Schema.ObjectId
let usersSchema = new Schema({
    username:{ 
        type: String, 
        minlength: 3, 
        unique: true,
        required: [true, "username required"]
    },
    password: {
        type: String, 
        minlength: 6,
        required: [true, "password required"]
    },
    salt:String,
    role:String
})
let Users = mongoose.model('Users', usersSchema)
module.exports = Users