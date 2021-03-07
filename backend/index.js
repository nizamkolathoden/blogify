const exprees = require('express');
const app = exprees();

//cors
const cors = require('cors');
app.use(cors());

//dot env
const env = require('dotenv');
env.config({path:'./config/key.env'})

//DB
const DB = require('./config/DB');
DB()
//json
app.use(exprees.json());

//router auth
app.use("/auth",require('./routes/auth'));


//router blog
app.use("/blog",require('./routes/blog'));

//Sever starting
const Port = process.env.Port;
app.listen(Port,()=>console.log('server started on port:',Port))