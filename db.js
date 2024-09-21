const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const User = new Schema({
    email:{type:String , unique:true},
    password:String,
    name: String

})

const Todo = new Schema({
    title:String,
    done:Boolean,
    name: ObjectId

})

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',User);
//this file export form here to index.js so the we can use these file

module.exports ={
    UserModel:UserModel,
    TodoModel:TodoModel
}
