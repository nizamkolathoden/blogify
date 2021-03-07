const mogoose = require('mongoose');
const {ObjectId} = mogoose.Schema.Types
const PostSchema = new mogoose.Schema({

title:{
    type:String
},
body:{
    type:String
},
Date:{
    type:String,
    default:new Date().toLocaleDateString()
},
postedBy:{
    type:ObjectId,
    ref:"User"
}

})
module.exports = mogoose.model("blog",PostSchema)