const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dboverflow')
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