const mongoose = require('mongoose');
try{
const DB  = ()=>{
try{
const db = process.env.DB;
mongoose.connect(db,{

useNewUrlParser:true,
useUnifiedTopology:true

},()=>console.log('connected to DB'));
}
catch(e){

    console.log('error in conecting DB',e);
}
}

module.exports = DB
}
catch(e){

    console.log('error in conecting DB',e);
}