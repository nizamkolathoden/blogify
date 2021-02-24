const mogoose = require('mongoose');

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
}

})
module.exports = mogoose.model("blog",PostSchema)